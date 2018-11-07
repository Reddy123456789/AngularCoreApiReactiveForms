using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using OvrApp.API.Data;
using OvrApp.API.Models;

namespace OvrApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OvrAppController : Controller
    {
        private readonly OvrAppContext _context;

        // initiate database context
        public OvrAppController(OvrAppContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getAllEligibility")]
        public IEnumerable<Eligibility> GetAll()
        {
            // fetch all contact records 
            return _context.Eligibilitys.ToList();
        }

        [HttpGet]
        [Route("getEligibility")]
        public IActionResult GetById(long id)
        {
            // filter contact records by contact id
            var item = _context.Eligibilitys.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        [Route("addEligibility")]
        public IActionResult CreateEligibility([FromBody] Eligibility item)
        {
            // set bad request if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }
            
            _context.Eligibilitys.Add(new Eligibility
            {
                IsCitizen = item.IsCitizen,
                IsFelon = item.IsFelon,
                IsMentalIncomp = item.IsMentalIncomp,
                NewRegistration = item.NewRegistration,
                RecordUpdate = item.RecordUpdate,
                RequesttoReplace = item.RequesttoReplace,
                DLNumber = item.DLNumber,
                LastSSN = item.LastSSN,
                IssueDate = item.IssueDate,
                LastName = item.LastName,
                Firstname = item.Firstname,
                MiddleName = item.MiddleName,
                Suffix = item.Suffix,
                Dob = item.Dob
            });
            _context.SaveChanges();

            return Ok( new { message= "Eligibility is added successfully."});
        }
    }
}