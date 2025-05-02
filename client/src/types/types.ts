export interface CustomerType {
  customerId: string;
  name: string;
  monthlyIncome: number;
  monthlyExpenses: number;
  creditScore: number;
  outstandingLoans: number;
  loanRepaymentHistory: number[];
  accountBalance: number;
  status: reviewStatus;
}

export type reviewStatus = "Review" | "Approved" | "Rejected";

export type ThemeMode = "dark" | "default";
