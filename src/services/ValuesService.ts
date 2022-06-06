import { IValues, IValuesConstructor } from '../@types/interfaces';

export class ValuesService {
  private valuesConstructor: IValuesConstructor;
  private monthlyGrossValue!: number;
  private monthlyNetValue!: number;
  private monthlyBenefits!: number;

  constructor(
    valuesConstructor: IValuesConstructor
  ) {
    this.valuesConstructor = valuesConstructor
  }

  private monthlyGrossValueCalculation() {
    this.monthlyGrossValue = this.valuesConstructor.baseValue + this.valuesConstructor.workScheduleExemptionValue
      + this.valuesConstructor.vacationsTwelfth + this.valuesConstructor.christmasTwelfth +
      this.valuesConstructor.otherExpenses + this.valuesConstructor.remoteWorkAllowance
  }

  private monthlyNetValueCalculation() {
    this.monthlyGrossValueCalculation()

    this.monthlyNetValue = this.monthlyGrossValue - (
      this.valuesConstructor.deductions.baseValueSocialSecurity +
      this.valuesConstructor.deductions.christmasAllowanceTwelfthSocialSecurity +
      this.valuesConstructor.deductions.vacationsAllowanceTwelfthSocialSecurity +
      this.valuesConstructor.deductions.baseValueIRS +
      this.valuesConstructor.deductions.christmasAllowanceTwelfthAllowanceIRS +
      this.valuesConstructor.deductions.vacationsAllowanceTwelfthAllowanceIRS
    )
  }

  private monthlyBenefitsCalculation() {
    this.monthlyBenefits = this.valuesConstructor.communicationsPlafond + this.valuesConstructor.healthInsurance
  }

  public getValues(): IValues {
    this.monthlyNetValueCalculation();
    this.monthlyBenefitsCalculation();

    return {
      monthlyNetValue: this.monthlyNetValue,
      monthlyBenefits: this.monthlyBenefits,
      monthlyGrossValue: this.monthlyGrossValue,
      anualBenefits: this.monthlyBenefits * 12,
      anualGrossValue: this.monthlyGrossValue * 12,
      anualNetValue: this.monthlyNetValue * 12
    }
  }
}