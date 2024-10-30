interface CompanyDetails {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hrName: string;
}

interface PayslipDetails {
  date: string;
  payDate: string;
  workingDays: string;
}

interface EmployeeDetails {
  name: string;
  designation: string;
  joining: string
}

export interface SalaryDetails {
  basicPay: number;
  accommodation: number
  transportation: number
  overtime: number;
  }

interface Deduction {
  amount: number;
  reason: string;
}

interface PayslipDocumentProps {
  company: CompanyDetails;
  payslipDetails: PayslipDetails;
  employee: EmployeeDetails;
  salaryDetails: SalaryDetails;
  deductions: Deduction[];
  totalEarnings: number;
  totalDeductions: number;
  netPay: number;
}

export default PayslipDocumentProps;