export interface CashFlow {
  year: number;
  amount: number;
}

export interface InvestmentData {
  initialInvestment: number;
  discountRate: number;
  cashFlows: CashFlow[];
}

export function calculateNPV(data: InvestmentData): number {
  const { initialInvestment, discountRate, cashFlows } = data;
  const rate = discountRate / 100;
  
  const presentValues = cashFlows.map(cf => 
    cf.amount / Math.pow(1 + rate, cf.year)
  );
  
  const totalPV = presentValues.reduce((sum, pv) => sum + pv, 0);
  return totalPV - initialInvestment;
}

export function calculatePI(data: InvestmentData): number {
  const { initialInvestment, discountRate, cashFlows } = data;
  const rate = discountRate / 100;
  
  const presentValues = cashFlows.map(cf => 
    cf.amount / Math.pow(1 + rate, cf.year)
  );
  
  const totalPV = presentValues.reduce((sum, pv) => sum + pv, 0);
  return totalPV / initialInvestment;
}

export function calculatePaybackPeriod(data: InvestmentData): number {
  const { initialInvestment, cashFlows } = data;
  let remainingInvestment = initialInvestment;
  let years = 0;
  
  for (const cf of cashFlows) {
    remainingInvestment -= cf.amount;
    if (remainingInvestment <= 0) {
      return years + (remainingInvestment + cf.amount) / cf.amount;
    }
    years++;
  }
  
  return years;
}

export function calculateIRR(data: InvestmentData): number {
  const { initialInvestment, cashFlows } = data;
  const tolerance = 0.0001;
  let guess = 0.1;
  
  for (let i = 0; i < 100; i++) {
    const npv = calculateNPVWithRate(initialInvestment, cashFlows, guess);
    const derivative = calculateNPVDerivative(initialInvestment, cashFlows, guess);
    
    const newGuess = guess - npv / derivative;
    
    if (Math.abs(newGuess - guess) < tolerance) {
      return newGuess * 100;
    }
    
    guess = newGuess;
  }
  
  return guess * 100;
}

function calculateNPVWithRate(initialInvestment: number, cashFlows: CashFlow[], rate: number): number {
  const presentValues = cashFlows.map(cf => 
    cf.amount / Math.pow(1 + rate, cf.year)
  );
  
  return presentValues.reduce((sum, pv) => sum + pv, 0) - initialInvestment;
}

function calculateNPVDerivative(initialInvestment: number, cashFlows: CashFlow[], rate: number): number {
  return cashFlows.reduce((sum, cf) => 
    sum - (cf.year * cf.amount) / Math.pow(1 + rate, cf.year + 1), 0
  );
}