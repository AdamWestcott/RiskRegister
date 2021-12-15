using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public class RiskAssesmentPDF
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int Number { get; set; }

        public DateTime Date { get; set; }

        public decimal Value { get; set; }

        public byte[] PDF { get; set; }

        public string PDFName { get; set; }



    }
}
