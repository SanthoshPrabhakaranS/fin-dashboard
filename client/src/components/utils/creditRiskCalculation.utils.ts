import { CustomerType } from "../../types/types";

export function calculateRiskScore(customer: CustomerType) {
  const { creditScore, loanRepaymentHistory, outstandingLoans, monthlyIncome } =
    customer;

  const baseScore = 100;

  // 1. Credit Score Penalty (out of 850, normalize)
  const creditPenalty = (850 - creditScore) / 10;

  // 2. Missed Payments Penalty
  const missedPayments = loanRepaymentHistory.filter((p) => p === 0).length;
  const missedPaymentPenalty = missedPayments * 5;

  // 3. Loan-to-Income Ratio Penalty
  const loanToIncomeRatio = outstandingLoans / monthlyIncome;
  const loanRatioPenalty = loanToIncomeRatio * 10; // Tunable factor

  // Final risk score
  let riskScore =
    baseScore - (creditPenalty + missedPaymentPenalty + loanRatioPenalty);

  // Clamp between 0 and 100
  return Math.max(0, Math.min(100, Math.round(riskScore)));
}
