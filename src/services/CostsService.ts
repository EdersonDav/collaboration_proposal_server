import { ICosts, ICostsConstructor } from '../@types/interfaces';

export class CostsService {
  private costsValuesContructor: ICostsConstructor;
  private annualCostsValue!: number;

  constructor(
    costsValuesContructor: ICostsConstructor
  ) {
    this.costsValuesContructor = costsValuesContructor;
  }

  private annualCostsValuesCalculation() {
    this.annualCostsValue = this.costsValuesContructor.values.anualGrossValue +
      this.costsValuesContructor.values.anualBenefits
  }

  public getCosts(): ICosts {
    this.annualCostsValuesCalculation();

    return {
      annualCosts: this.annualCostsValue,
      monthlyCosts: this.annualCostsValue / 12,
      dailyCosts: (this.annualCostsValue / 12) / 18
    }
  }

}