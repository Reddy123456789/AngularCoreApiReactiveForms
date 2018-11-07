using System;

namespace OvrApp.API.Models
{
    public class Eligibility
    {
        public int? Id { get; set; }        
        public string IsCitizen { get; set; }        
        public string IsFelon { get; set; }        
        public string IsMentalIncomp { get; set; }
        public bool NewRegistration { get; set; }
        public bool RecordUpdate { get; set; }
        public bool RequesttoReplace { get; set; }
        public string DLNumber { get; set; }
        public string LastSSN { get; set; }
        public DateTime? IssueDate { get; set; }
        public string LastName { get; set; }
        public string Firstname { get; set; }
        public string MiddleName { get; set; }
        public string Suffix { get; set; }
        public DateTime? Dob { get; set; }
    }
}