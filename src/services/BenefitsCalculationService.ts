export class BenefitsCalculationService {
  private numberFamilyMenbers: number;
  private healthInsurance: number;
  private familyMenbersValue!: number;

  constructor(numberFamilyMenbers: number, healthInsurance: number) {
    this.numberFamilyMenbers = numberFamilyMenbers;
    this.healthInsurance = healthInsurance;

  }

  private familyMenbersValueCalculation() {
    this.familyMenbersValue = this.healthInsurance * this.numberFamilyMenbers;
  }

  public getFamilyMenbersValue() {
    this.familyMenbersValueCalculation()

    return this.familyMenbersValue
  }


}