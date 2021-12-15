using DataAccess.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Buisness.Repository.IRepository
{
   public interface IRiskAssesmentPDFRepository
    {
        List<RiskAssesmentPDF> GetRiskAssesmentPDFs();

        RiskAssesmentPDF uploadRiskAssesmentPDF(int invoiceID, byte[] pdf, string pdfName);

        RiskAssesmentPDF Save(RiskAssesmentPDF riskAssesmentPDF);

        void DeletePDF(int pdfId);

        public Task<int> DeleteObject(int pdfId);

        void CheckString(string stringName);
    }
}
