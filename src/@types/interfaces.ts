export interface IDeductions {
  baseValueSocialSecurity: number;
  christmasAllowanceTwelfthSocialSecurity: number;
  vacationsAllowanceTwelfthSocialSecurity: number;
  baseValueIRS: number;
  christmasAllowanceTwelfthAllowanceIRS: number;
  vacationsAllowanceTwelfthAllowanceIRS: number;
}

export interface IValues {
  monthlyGrossValue: number;
  monthlyNetValue: number;
  anualGrossValue: number;
  anualNetValue: number;
  monthlyBenefits: number;
  anualBenefits: number;
}

export interface ICosts {
  annualCosts: number;
  monthlyCosts: number;
  dailyCosts: number;
}

export interface IProposalResult {
  deductions: IDeductions;
  values: IValues;
  costs: ICosts;
}

export interface IProposalConstructor {
  baseValue: number;
  workScheduleExemption: number;
  workScheduleExemptionValue: number;
  irsTax: number;
  vacationsTwelfth: number;
  christmasTwelfth: number;
  otherExpenses: number;
  remoteWorkAllowance: number;
  communicationsPlafond: number;
  healthInsurance: number;
  familyMembersValue: number;
}

export interface IDeductionsConstructor {
  baseValue: number;
  workScheduleExemptionValue: number;
  irsTax: number;
  christmasTwelfth: number;
  vacationsTwelfth: number;
}

export interface IValuesConstructor {
  baseValue: number;
  workScheduleExemptionValue: number;
  vacationsTwelfth: number;
  christmasTwelfth: number;
  otherExpenses: number;
  remoteWorkAllowance: number;
  communicationsPlafond: number;
  healthInsurance: number;
  deductions: IDeductions;
}

export interface ICostsConstructor {
  values: IValues;
}

export interface ProposalResume {
  annualCosts: number;
  anualBenefits: number;
  anualGrossValue: number;
  anualNetValue: number;
  baseValue: number;
  baseValueIRS: number;
  baseValueSocialSecurity: number;
  christmasAllowanceTwelfthAllowanceIRS: number;
  christmasAllowanceTwelfthSocialSecurity: number;
  christmasTwelfth: number;
  collaborationStartDate: string;
  communicationsPlafond: number;
  dailyCosts: number;
  email: string;
  familyMembersValue: number;
  healthInsurance: number;
  includeFamilymembers: string;
  irsTax: number;
  monthlyBenefits: number;
  monthlyCosts: number;
  monthlyGrossValue: number;
  monthlyNetValue: number;
  name: string;
  numberFamilyMembers: number;
  otherExpenses: number;
  remoteWorkAllowance: number;
  vacationsAllowanceTwelfthAllowanceIRS: number;
  vacationsAllowanceTwelfthSocialSecurity: number;
  vacationsTwelfth: number;
  workScheduleExemption: number;
  workScheduleExemptionValue: number;
}