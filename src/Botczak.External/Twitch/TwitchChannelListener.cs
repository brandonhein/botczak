using System;
using System.IO;
using System.Net.Security;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace Botczak.External.Twitch
{
    public interface ITwitchChannelListener
    {
        event EventHandler<OnMessageEventArgs> OnMessage;
        Task<ITwitchChannelListener> AuthenticateAsync(string userName, string password);
        Task<ITwitchChannelListener> ListenAsync(params string[] channels);
        Task SendAsync(string channel, string message);
    }

    public class TwitchChannelListener : ITwitchChannelListener
    {
        private readonly TcpClient _tcpClient;
        private const string ip = "irc.chat.twitch.tv";
        private const int port = 6697;
        public TwitchChannelListener(TcpClient tcpClient)
        {
            _tcpClient = tcpClient;
        }

        public event EventHandler<OnMessageEventArgs> OnMessage = delegate { };

        private string _userName;
        private string _password;
        private StreamReader _streamReader;
        private StreamWriter _streamWriter;
        private TaskCompletionSource<int> _connected = new TaskCompletionSource<int>();

        public async Task<ITwitchChannelListener> AuthenticateAsync(string userName, string password)
        {
            _userName = userName;
            _password = password;

            await _tcpClient.ConnectAsync(ip, port);
            var sslStream = new SslStream(_tcpClient.GetStream());
            await sslStream.AuthenticateAsClientAsync(ip);

            _streamReader = new StreamReader(sslStream);
            _streamWriter = new StreamWriter(sslStream) { NewLine = "\r\n", AutoFlush = true };

            await _streamWriter.WriteLineAsync($"PASS {_password}");
            await _streamWriter.WriteLineAsync($"NICK {_userName}");
            _connected.SetResult(0);

            ListenAsync();

            return this;
        }

        public async Task<ITwitchChannelListener> ListenAsync(params string[] channels)
        {
            await _connected.Task;
            foreach (var channel in channels)
            {
                await _streamWriter.WriteLineAsync($"JOIN #{channel}");
            }
            return this;
        }

        public async Task SendAsync(string channel, string message)
        {
            await _connected.Task;
            await _streamWriter.WriteLineAsync($"PRIVMSG #{channel} :{message}");
        }

        private async Task ListenAsync()
        {
            while (true)
            {
                string line = await _streamReader.ReadLineAsync();

                string[] split = line.Split(' ');
                if (line.StartsWith("PING"))
                {
                    await _streamWriter.WriteLineAsync($"PONG {split[1]}");
                }

                if (split.Length > 2 && split[1] == "PRIVMSG")
                {
                    var exclamationPointPosition = split[0].IndexOf("!");
                    var username = split[0].Substring(1, exclamationPointPosition - 1);

                    var secondColonPosition = line.IndexOf(':', 1);
                    var message = line.Substring(secondColonPosition + 1);
                    var channel = split[2].TrimStart('#');

                    OnMessage(this, new OnMessageEventArgs
                    {
                        Message = message,
                        Sender = username,
                        Channel = channel
                    });
                }
            }
        }
    }
}
