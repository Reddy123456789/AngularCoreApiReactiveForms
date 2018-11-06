using Microsoft.EntityFrameworkCore;
using OvrApp.API.Models;

namespace OvrApp.API.Data
{
    public class OvrAppContext : DbContext
    {
        public OvrAppContext(DbContextOptions<OvrAppContext> options) : base(options)
        {}

        public DbSet<Eligibility> Eligibilitys {get; set;}
    }
}