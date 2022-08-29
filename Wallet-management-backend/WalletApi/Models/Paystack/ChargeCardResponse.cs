using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class CardData
{
    public string Reference { get; set; }
    public int Amount { get; set; }
    public DateTime CreatedAt { get; set; }
}

namespace WalletApi.Models.Paystack
{
    public class ChargeCardResponse
    {

        public CardData Data { get; set; }
      
    }
    /*public class ChargeCardResponse
    {
        private string _extendedData;

        public JObject Data
        {
            get => JsonConvert.DeserializeObject<JObject>(string.IsNullOrEmpty(_extendedData) ? "{}" : _extendedData);
            set
            {
                _extendedData = value.ToString();
            }
        }
    }*/
}
