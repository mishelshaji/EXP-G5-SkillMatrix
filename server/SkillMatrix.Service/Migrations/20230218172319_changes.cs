using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkillMatrix.Service.Migrations
{
    public partial class changes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "UserSkills",
                newName: "SkillType");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SkillType",
                table: "UserSkills",
                newName: "Type");
        }
    }
}
