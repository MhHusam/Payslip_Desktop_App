import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PayslipDocumentProps from './types';


 
const styles = StyleSheet.create({
  page: { padding: 20, backgroundColor: '#f3f4f6' },
  header: { textAlign: 'center', fontSize: 24, marginBottom: 20, color: '#003366', fontWeight: 'bold' },
  section: { marginBottom: 20 ,flexDirection:'column',gap:'2px' },
  title: { fontSize: 18, color: '#003366', fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 10, color: '#333' },
  textNet: { fontSize: 12, color: '#333',fontWeight:'bold'  },
  table: { width: '100%', marginTop: 10, borderRadius: 5, overflow: 'hidden' },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#003366',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  tableHeaderText: { fontSize: 11, fontWeight: 'bold', color: '#ffffff' ,width:'50%' },
  tableRow: { flexDirection: 'row', backgroundColor: '#ffffff', padding: 8, borderBottom: '1px solid #e0e0e0' },
  tableCell: { flex: 1, fontSize: 10, textAlign: 'center', color: '#333' },
  totalRow: { flexDirection: 'row', padding: 10, backgroundColor: '#f3f3f3', borderTop: '1px solid #ccc' },
  totalText: { fontWeight: 'bold', fontSize: 10, textAlign: 'center', color: '#333' },
  HrSection:{ flexDirection: 'column', display:'flex', gap:10 ,marginTop: 20, paddingTop: 10, borderTop: '1px solid #e0e0e0' },
  signatureSection: { flexDirection: 'row', display:'flex', justifyContent: 'space-between',marginTop: 20, paddingTop: 20, borderTop: '1px solid #e0e0e0' },
  signatureText: { fontSize: 10, color: '#333' },
  firstSection:{flexDirection: 'row'   ,marginTop:'20px' ,justifyContent:'space-between'    },
  head:{fontSize: 11, color: '#000000', fontWeight: 'bold' }
});

const PayslipDocument: React.FC<PayslipDocumentProps> = ({
  company,
  payslipDetails,
  employee,
  salaryDetails,
  deductions,
  totalEarnings,
  totalDeductions,
  netPay
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Payslip</Text>

      <View style={styles.firstSection}>
        <View style={styles.section}>
        
 
        {company.name && <Text style={styles.text}><Text style={styles.head}>Company: </Text>{company.name}</Text>}
        {company.address && <Text style={styles.text}><Text style={styles.head}>Address: </Text>{company.address}</Text>}
        {company.phone && <Text style={styles.text}><Text style={styles.head}>Phone: </Text>{company.phone}</Text>}
        {company.email && <Text style={styles.text}><Text style={styles.head}>Email: </Text>{company.email}</Text>}
      </View>

      <View style={styles.section}>
  {employee.name && <Text style={styles.text}><Text style={styles.head}>Employee name: </Text>{employee.name}</Text>}
  {employee.designation && <Text style={styles.text}><Text style={styles.head}>Designation: </Text>{employee.designation}</Text>}
  {employee.joining && <Text style={styles.text}><Text style={styles.head}>Joining date: </Text>{employee.joining}</Text>}
</View>
      <View style={styles.section}>
        
         
          {payslipDetails.payDate && <Text style={styles.text}><Text style={styles.head}>Pay Date: </Text>{payslipDetails.payDate}</Text>}
          {payslipDetails.workingDays && <Text style={styles.text}><Text style={styles.head}>Working Days: </Text>{payslipDetails.workingDays}</Text>}
        </View>

        </View>
    

        {/* Payslip Details */}
     
        {/* Employee Information */}
 

        {/* Earnings Table */}
        <View style={styles.section}>
          <Text style={styles.title}>Earnings</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Description</Text>
              <Text style={styles.tableHeaderText}>Amount</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Basic Salary</Text>
              <Text style={styles.tableCell}>{salaryDetails.basicPay || '-'} AED</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Accommodation</Text>
              <Text style={styles.tableCell}>{salaryDetails.accommodation || '-'} AED</Text>
            </View>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Transportation</Text>
              <Text style={styles.tableCell}>{salaryDetails.transportation || '-'} AED</Text>
            </View>
            { salaryDetails.overtime &&   <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Overtime</Text>
              <Text style={styles.tableCell}>{salaryDetails.overtime || '-'} AED</Text>
            </View>}
         
            {totalEarnings &&    <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total Earnings:</Text>
              <Text style={styles.totalText}>{totalEarnings.toFixed(2)} AED</Text>
            </View>}
         
          </View>
        </View>

        {/* Deductions Table */}
        <View style={styles.section}>
          <Text style={styles.title}>Deductions</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Description</Text>
              <Text style={styles.tableHeaderText}>Amount</Text>
            </View>
            {deductions.map((ded, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{ded.reason || 'N/A'}</Text>
                <Text style={styles.tableCell}>{ded.amount || '-'} AED</Text>
              </View>
            ))}
            {totalDeductions &&   <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total Deductions:</Text>
              <Text style={styles.totalText}>{totalDeductions.toFixed(2)} AED</Text>
            </View>}
        
          </View>
        </View>

        {/* Net Pay */}
        {netPay &&   <View style={styles.section}>
          <Text style={styles.title}>Net Salary Pay</Text>
          <Text style={styles.textNet}>{netPay.toFixed(2)} AED</Text>
        </View>}
      

        {/* Signature Section */}
        <View style={styles.signatureSection}>
          <Text style={styles.signatureText}>Company Signature: ___________________</Text>
          <Text style={styles.signatureText}>Employee Signature: ___________________</Text>
        </View>

        <View style={styles.HrSection}>
          <Text style={styles.signatureText}>Prepared by: <br/>
           {company.hrName}
           </Text>
           <Text style={styles.signatureText}>  
           HR Manager </Text>
        </View>
         
         
       
      </Page>
    </Document>
  );
};

const PdfViewer: React.FC<PayslipDocumentProps> = ({
  company,
  payslipDetails,
  employee,
  salaryDetails,
  deductions,
  totalEarnings,
  totalDeductions,
  netPay,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-5 p-6">
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-4">
        <PDFViewer width="100%" height="600">
          <PayslipDocument
            company={company}
            payslipDetails={payslipDetails}
            employee={employee}
            salaryDetails={salaryDetails}
            deductions={deductions}
            totalEarnings={totalEarnings}
            totalDeductions={totalDeductions}
            netPay={netPay}
          />
        </PDFViewer>
      </div>

      <PDFDownloadLink
        document={
          <PayslipDocument
            company={company}
            payslipDetails={payslipDetails}
            employee={employee}
            salaryDetails={salaryDetails}
            deductions={deductions}
            totalEarnings={totalEarnings}
            totalDeductions={totalDeductions}
            netPay={netPay}
          />
        }
        fileName="payslip.pdf"
        className="btn w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 text-center"
      >
              Download Payslip PDF 
      </PDFDownloadLink>
    </div>
  );
};
export default PdfViewer;