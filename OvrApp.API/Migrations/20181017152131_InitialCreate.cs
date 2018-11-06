using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OvrApp.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Eligibilitys",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsCitizen = table.Column<string>(nullable: true),
                    IsFelon = table.Column<string>(nullable: true),
                    IsMentalIncomp = table.Column<string>(nullable: true),
                    NewRegistration = table.Column<bool>(nullable: false),
                    RecordUpdate = table.Column<bool>(nullable: false),
                    RequesttoReplace = table.Column<bool>(nullable: false),
                    DLNumber = table.Column<string>(nullable: true),
                    LastSSN = table.Column<string>(nullable: true),
                    IssueDate = table.Column<DateTime>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Firstname = table.Column<string>(nullable: true),
                    MiddleName = table.Column<string>(nullable: true),
                    Suffix = table.Column<string>(nullable: true),
                    Dob = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eligibilitys", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Eligibilitys");
        }
    }
}
