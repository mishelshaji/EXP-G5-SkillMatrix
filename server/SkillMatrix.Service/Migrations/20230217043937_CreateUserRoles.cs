using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkillMatrix.Service.Migrations
{
    public partial class CreateUserRoles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c1c3df32-fc04-44e5-82ec-496b16bd060b", "c1c3df32-fc04-44e5-82ec-496b16bd060b", "Admin", "Admin" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c1c3df32-fc04-44e5-82ec-496b16bd060c", "c1c3df32-fc04-44e5-82ec-496b16bd060c", "User", "USER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c1c3df32-fc04-44e5-82ec-496b16bd060b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c1c3df32-fc04-44e5-82ec-496b16bd060c");
        }
    }
}
