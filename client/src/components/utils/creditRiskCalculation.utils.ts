import { CustomerType } from "../../types/types";

export function calculateRiskScore(customer: CustomerType) {
  const { creditScore, loanRepaymentHistory, outstandingLoans, monthlyIncome } =
    customer;

  const baseScore = 100;

  const creditPenalty = (850 - creditScore) / 10;

  const missedPayments = loanRepaymentHistory.filter((p) => p === 0).length;
  const missedPaymentPenalty = missedPayments * 5;

  const loanToIncomeRatio = outstandingLoans / monthlyIncome;
  const loanRatioPenalty = loanToIncomeRatio * 10;

  const riskScore =
    baseScore - (creditPenalty + missedPaymentPenalty + loanRatioPenalty);

  return Math.max(0, Math.min(100, Math.round(riskScore)));
}
