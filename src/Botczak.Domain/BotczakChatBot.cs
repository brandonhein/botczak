using Botczak.External.Twitch;
using Hein.Framework.DependencyInjection;
using System;

namespace Botczak.Domain
{
    public class BotczakChatBot
    {
        private static ITwitchChannelListener _listener { get { return ServiceLocator.Get<ITwitchChannelListener>(); } }

        public static event EventHandler<OnMessageEventArgs> NewMessageEvent = delegate { };

        static BotczakChatBot()
        {
            _listener.OnMessage += NewMessageEvent;
        }
    }
}
