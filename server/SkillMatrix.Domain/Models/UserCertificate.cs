using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class UserCertificate
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string IssuedAuthority { get; set; }

        [Required]
        public DateTime IssuedDate { get; set; }

        [Required]
        public DateTime ExpiryDate { get; set; }

        [Required]
        [StringLength(500)]
        public string Image { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int CertificateId { get; set; }

        public Certificate Certificate { get; set; }
    }
}
