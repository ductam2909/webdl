using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ConfigEfcore.Migrations
{
    public partial class InitMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    GroupId = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.GroupId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReplyUserId = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    ReplyUserCommentId = table.Column<int>(type: "int", nullable: false),
                    Text = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    CreateAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    GroupId = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "GroupId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Groups",
                columns: new[] { "GroupId", "Name" },
                values: new object[] { "1", "detail" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreateAt", "GroupId", "Name", "ReplyUserCommentId", "ReplyUserId", "Text", "UserId" },
                values: new object[,]
                {
                    { 1, new DateTime(2000, 8, 27, 3, 11, 48, 0, DateTimeKind.Unspecified), "1", "Nguyễn Thanh Huy", -1, "", "How to build comment chat Ef core?", "1" },
                    { 2, new DateTime(2000, 8, 27, 3, 12, 55, 0, DateTimeKind.Unspecified), "1", "Nguyễn Thị Thu Diệu", 1, "1", "wacth yuotube and i have link create db https://code-maze.com/entity-framework-core-series/", "2" },
                    { 3, new DateTime(2000, 8, 27, 3, 13, 56, 0, DateTimeKind.Unspecified), "1", "Nguyễn Thanh Huy", 2, "2", "yeah tks yous, i try!", "1" },
                    { 4, new DateTime(2000, 8, 27, 4, 15, 20, 0, DateTimeKind.Unspecified), "1", "Amino Oreki", 2, "2", "wow , great link , tks you?", "3" },
                    { 5, new DateTime(2000, 8, 27, 3, 13, 41, 0, DateTimeKind.Unspecified), "1", "Nguyễn Văn A", 1, "1", "inbox me ...", "4" },
                    { 6, new DateTime(2000, 10, 27, 2, 45, 41, 0, DateTimeKind.Unspecified), "1", "Nguyễn Thị Thu Diệu", -1, "", "Kiến thức thật tuyệt vời , thật tuyệt khi được biết đến chúng!", "2" },
                    { 7, new DateTime(2000, 10, 27, 2, 46, 2, 0, DateTimeKind.Unspecified), "1", "Nguyễn Thanh Huy", 6, "2", "không có chi nè!", "1" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_GroupId",
                table: "Users",
                column: "GroupId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Groups");
        }
    }
}
