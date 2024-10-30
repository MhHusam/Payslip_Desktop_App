import { useState } from 'react';
import PdfVewier from '../PdfVewier';
import { SalaryDetails } from '../types';

function Payslip() {
  const [showViewer, setShowViewer] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [company, setCompany] = useState({
    name: 'Digital Trust Csp',
    address: 'Silicon Oasis, A1 building',
    phone: '042160772',
    email: 'administration@digitaltrustcsp.com',
    website: 'www.digitaltrustcsp.com',
    hrName: 'Ibrahim Nizam',
  });
  
  const [payslipDetails, setPayslipDetails] = useState({
    date: new Date().toLocaleDateString(),
    payDate: '',
    workingDays: '',
  });

  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    joining: '',
  });

  const [salaryDetails, setSalaryDetails] = useState<SalaryDetails>({
    basicPay: 0,
    accommodation: 0, // Changed from allowance to accommodation
    transportation: 0, // Added transportation
    overtime: 0,
  });

  const [deductions, setDeductions] = useState([{ amount: 0, reason: '' }]);
  
  const totalEarnings = Number(salaryDetails.basicPay) + Number(salaryDetails.accommodation) + Number(salaryDetails.transportation) + Number(salaryDetails.overtime);
  const totalDeductions = deductions.reduce((sum, ded) => sum + (Number(ded.amount) || 0), 0);
  const netPay = totalEarnings - totalDeductions;

  // Validation function to check if required fields are filled
  const validateInputs = () => {
    if (
      !company.name ||
      !company.address ||
      !company.phone ||
      !company.email ||
      !payslipDetails.payDate ||
      !payslipDetails.workingDays ||
      !employee.name ||
      !employee.designation ||
      salaryDetails.basicPay === 0
    ) {
      setErrorMessage('Please fill in all required fields.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleShowPdf = () => {
    if (validateInputs()) {
      setShowViewer(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-5">
      <h2 className="text-xl font-bold mb-4 m-auto text-center rounded-t-xl bg-colored p-3 w-full text-white">Payslip Generator</h2>
      <div className="grid grid-cols-2 gap-10 p-10">
        {/* Header Details */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Company Details</h3>
          <input
            value={company.name}
            type="text"
            placeholder="Company Name"
            className="input"
            required
            onChange={(e) => setCompany({ ...company, name: e.target.value })}
          />
          <input
            value={company.address}
            type="text"
            placeholder="Company Address"
            className="input"
            required
            onChange={(e) => setCompany({ ...company, address: e.target.value })}
          />
          <input
            value={company.phone}
            type="number"
            placeholder="Company Phone Number"
            className="input"
            required
            onChange={(e) => setCompany({ ...company, phone: e.target.value })}
          />
          <input
            value={company.email}
            type="email"
            placeholder="Company Email"
            className="input"
            required
            onChange={(e) => setCompany({ ...company, email: e.target.value })}
          />
          <input
            value={company.website}
            type="text"
            placeholder="Company Website"
            className="input"
            onChange={(e) => setCompany({ ...company, website: e.target.value })}
          />
          <input
            value={company.hrName}
            type="text"
            placeholder="Company HR Name"
            className="input"
            onChange={(e) => setCompany({ ...company, hrName: e.target.value })}
          />
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Payslip Details</h3>
          <label className='font-medium'>Pay Date</label>
          <input
            type="date"
            className="input"
            required
            onChange={(e) => setPayslipDetails({ ...payslipDetails, payDate: e.target.value })}
          />
          <input
            type="number"
            placeholder="Working Days"
            className="input"
            required
            onChange={(e) => setPayslipDetails({ ...payslipDetails, workingDays: e.target.value })}
          />
        </section>

        {/* Employee Details */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Employee Details</h3>
          <input
            type="text"
            placeholder="Employee Name"
            className="input"
            required
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
          <input
            type="text"
            placeholder="Designation"
            className="input"
            required
            onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
          />
          <label className='font-medium'>Joining Date</label>
          <input
            type="date"
            className="input"
            required
            onChange={(e) => setEmployee({ ...employee, joining: e.target.value })}
          />
        </section>

        {/* Salary Details */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Earnings Details</h3>
          <input
            type="number"
            placeholder="Basic Pay"
            className="input"
            required
            onChange={(e) => setSalaryDetails({ ...salaryDetails, basicPay: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Accommodation"
            className="input"
            onChange={(e) => setSalaryDetails({ ...salaryDetails, accommodation: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Transportation"
            className="input"
            onChange={(e) => setSalaryDetails({ ...salaryDetails, transportation: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Overtime"
            className="input"
            onChange={(e) => setSalaryDetails({ ...salaryDetails, overtime: Number(e.target.value) })}
          />
          <div className="mt-2 font-bold">Total Earnings: AED {totalEarnings.toFixed(2)}</div>
        </section>

        {/* Deductions */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Deductions</h3>
          {deductions.map((_, idx) => (
            <div key={idx} className="flex space-x-2 mb-2">
              <input
                type="number"
                placeholder="Amount"
                className="input"
                onChange={(e) => {
                  const newDeductions = [...deductions];
                  newDeductions[idx].amount = Number(e.target.value);
                  setDeductions(newDeductions);
                }}
              />
              <input
                type="text"
                placeholder="Reason"
                className="input"
                onChange={(e) => {
                  const newDeductions = [...deductions];
                  newDeductions[idx].reason = e.target.value;
                  setDeductions(newDeductions);
                }}
              />
            </div>
          ))}
          <button
            onClick={() => setDeductions([...deductions, { amount: 0, reason: '' }])}
            className="btn"
          >
            Add Deduction
          </button>
          <div className="mt-2 font-bold">Total Deductions: AED {totalDeductions.toFixed(2)}</div>
        </section>

        {/* Net Pay */}
        <section className="mb-6 flex items-center">
          <h3 className="text-lg font-bold">Net Pay :</h3>
          <div className="text-lg font-bold bg-colored rounded-md p-2 ml-3 w-fit text-white">
            {netPay.toFixed(2)} AED
          </div>
        </section>
        <div className='relative'>
          {errorMessage && <p className="text-red-500 font-semibold absolute top-10 ">{errorMessage}</p>}
          <button onClick={handleShowPdf} className="btn">Generate PDF</button>
        </div>
      </div>
      {showViewer && <PdfVewier   totalEarnings={totalEarnings}
  totalDeductions ={totalDeductions}  netPay={netPay} company={company} payslipDetails={payslipDetails} employee={employee} salaryDetails={salaryDetails} deductions={deductions} />}
    </div>
  );
}

export default Payslip;
