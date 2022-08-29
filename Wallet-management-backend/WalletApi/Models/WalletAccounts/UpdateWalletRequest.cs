using System.ComponentModel.DataAnnotations;
using WalletApi.Entities;

namespace WalletApi.Models.WalletAccounts
{
    public class UpdateWalletRequest
    {
        /*private string _gender;*/
        private string _address1;
        private string _address2;
        /*private string _howDidYouHearAboutUs;*/
        private string _dateOfBirth;
        private string _phoneNumber1;
        private string _phoneNumber2;
        private string _country;
        private string _state;
        private string _localGovernment;
        public string _postalCode;

        /*public string Title { get; set; }*/
        public string Bvn { get; set; }
        public string Address1
        {
            get => _address1;
            set => _address1 = replaceEmptyWithNull(value);
        }

        public string Address2
        {
            get => _address2;
            set => _address2 = replaceEmptyWithNull(value);
        }

        public string DateOfBirth
        {
            get => _dateOfBirth;
            set => _dateOfBirth = replaceEmptyWithNull(value);
        }

        public string PhoneNumber1
        {
            get => _phoneNumber1;
            set => _phoneNumber1 = replaceEmptyWithNull(value);
        }

        public string PhoneNumber2
        {
            get => _phoneNumber2;
            set => _phoneNumber2 = replaceEmptyWithNull(value);
        }

        public string Country
        {
            get => _country;
            set => _country = replaceEmptyWithNull(value);
        }

        public string State
        {
            get => _state;
            set => _state = replaceEmptyWithNull(value);
        }

        public string LocalGovernment
        {
            get => _localGovernment;
            set => _localGovernment = replaceEmptyWithNull(value);
        }

        public string PostalCode
        {
            get => _postalCode;
            set => _postalCode = replaceEmptyWithNull(value);
        }


        /*[EnumDataType(typeof(Gender))]
        public string? Gender
        {
            get => _gender;
            set => _gender = replaceEmptyWithNull(value);
        }*/

        /*[EnumDataType(typeof(HowDidYouHearAboutUs))]
        public string? HowDidYouHearAboutUs
        {
            get => _howDidYouHearAboutUs;
            set => _howDidYouHearAboutUs = replaceEmptyWithNull(value);
        }*/

        // helpers

        private string replaceEmptyWithNull(string value)
        {
            // replace empty string with null to make field optional
            return string.IsNullOrEmpty(value) ? null : value;
        }
    }
}
