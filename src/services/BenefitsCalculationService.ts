export class BenefitsCalculationService {
  private numberFamilyMembers: number;
  private healthInsurance: number;

  constructor(numberFamilyMembers: number, healthInsurance: number) {
    this.numberFamilyMembers = numberFamilyMembers;
    this.healthInsurance = healthInsurance;

  }

  private familyMenbersValueCalculation() {
    return this.healthInsurance * this.numberFamilyMembers;
  }

  public getFamilyMenbersValue() {
    this.familyMenbersValueCalculation()

    return {
      familyMenbersValue: this.familyMenbersValueCalculation()
    }
  }


}