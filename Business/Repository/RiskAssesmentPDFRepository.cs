using Buisness.Repository.IRepository;
using DataAccess.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Buisness.Repository
{
    public class RiskAssesmentPDFRepository : IRiskAssesmentPDFRepository
    {
        private readonly ApplicationDbContext _db;

        public RiskAssesmentPDFRepository(ApplicationDbContext db)
        {
            _db = db;
           // _mapper = mapper;
        }

        public void CheckString(string stringName)
        {
            string temp = stringName;
        }

        public void DeletePDF(int pdfId)
        {
            _db.RiskAssesmentPDFs.SingleOrDefault(x => x.Id == pdfId).PDF = null;
            _db.RiskAssesmentPDFs.SingleOrDefault(x => x.Id == pdfId).PDFName = null;
            _db.SaveChanges();
        }

        public async Task<int> DeleteObject(int pdfId)
        {
            var RiskAssesmentDetails = await _db.RiskAssesmentPDFs.FindAsync(pdfId);
            _db.RiskAssesmentPDFs.Remove(RiskAssesmentDetails);
            return await _db.SaveChangesAsync();
        }

        public List<RiskAssesmentPDF> GetRiskAssesmentPDFs()
        {
            return _db.RiskAssesmentPDFs.ToList();
        }

        public RiskAssesmentPDF Save(RiskAssesmentPDF riskAssesmentPDF)
        {
            _db.RiskAssesmentPDFs.Add(riskAssesmentPDF);
            _db.SaveChanges();
            return riskAssesmentPDF;
        }

        public RiskAssesmentPDF uploadRiskAssesmentPDF(int riskAssesmentPDFID, byte[] pdf, string pdfName)
        {
            _db.RiskAssesmentPDFs.SingleOrDefault(x => x.Id == riskAssesmentPDFID).PDF = pdf;
            _db.RiskAssesmentPDFs.SingleOrDefault(x => x.Id == riskAssesmentPDFID).PDFName = pdfName;
            _db.SaveChanges();
            return _db.RiskAssesmentPDFs.SingleOrDefault(x => x.Id == riskAssesmentPDFID);
        }
    }
}
