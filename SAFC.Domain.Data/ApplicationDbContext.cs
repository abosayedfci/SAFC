
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SAFC.Domain.Core;
using System;

namespace SAFC.Domain.Data
{

    public class ApplicationDbContext : IdentityDbContext<User, Role, int>
    {
        //public ApplicationDbContext()
        //{

        //}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<ReservationRequest>(entity =>
            {
                entity.HasKey(e => e.ID).HasName("ID");
                entity.Property(e => e.ReservationDate).HasColumnType("datetime").IsRequired();
                entity.Property(e => e.Notes).HasMaxLength(1000).HasColumnType("nvarchar");
                entity.Property(e => e.MenuType).HasColumnType("int");
            });
        }

        public DbSet<ReservationRequest> Reservations { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
