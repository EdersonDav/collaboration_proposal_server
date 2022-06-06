import { IDeductions, IDeductionsConstructor } from "../@types/interfaces";

export class DeductionsService {
  private deductionsValuesConstructor: IDeductionsConstructor

  private deductionsPercentage = 0.11

  constructor(
    deductionsValuesConstructor: IDeductionsConstructor
  ) {
    this.deductionsValuesConstructor = {
      ...deductionsValuesConstructor, irsTax: (deductionsValuesConstructor.irsTax / 100)
    }
  }

  private baseValueSocialSecurityCalculation() {
    return (this.deductionsValuesConstructor.baseValue + this.deductionsValuesConstructor.workScheduleExemptionValue)
      * this.deductionsPercentage
  }

  private vacationsAllowanceSocialSecurityCalculation() {
    return this.deductionsValuesConstructor.vacationsTwelfth * this.deductionsPercentage
  }

  private christmasAllowanceSocialSecurityCalculation() {
    return this.deductionsValuesConstructor.christmasTwelfth * this.deductionsPercentage
  }

  private baseValueIRSCalculation() {
    return (this.deductionsValuesConstructor.baseValue + this.deductionsValuesConstructor.workScheduleExemptionValue)
      * this.deductionsValuesConstructor.irsTax
  }

  private vacationsAllowanceIRSCalculation() {
    return this.deductionsValuesConstructor.vacationsTwelfth * this.deductionsValuesConstructor.irsTax
  }

  private christmasAllowanceIRSCalculation() {
    return this.deductionsValuesConstructor.vacationsTwelfth * this.deductionsValuesConstructor.irsTax
  }

  public getDeductionsValues(): IDeductions {

    return {
      baseValueSocialSecurity: this.baseValueSocialSecurityCalculation(),
      christmasAllowanceTwelfthSocialSecurity: this.christmasAllowanceSocialSecurityCalculation(),
      vacationsAllowanceTwelfthSocialSecurity: this.vacationsAllowanceSocialSecurityCalculation(),
      baseValueIRS: this.baseValueIRSCalculation(),
      christmasAllowanceTwelfthAllowanceIRS: this.christmasAllowanceIRSCalculation(),
      vacationsAllowanceTwelfthAllowanceIRS: this.vacationsAllowanceIRSCalculation(),
    }

  }

}