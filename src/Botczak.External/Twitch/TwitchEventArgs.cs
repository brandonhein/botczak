using System;

namespace Botczak.External.Twitch
{
    public class OnMessageEventArgs : EventArgs
    {
        public string Sender { get; set; }
        public string Message { get; set; }
        public string Channel { get; set; }
    }
}
