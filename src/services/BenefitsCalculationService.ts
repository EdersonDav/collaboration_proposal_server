export class BenefitsCalculationService {
  private numberFamilyMembers: number;
  private healthInsurance: number;

  constructor(numberFamilyMembers: number, healthInsurance: number) {
    this.numberFamilyMembers = numberFamilyMembers;
    this.healthInsurance = healthInsurance;

  }

  private familyMembersValueCalculation() {
    return this.healthInsurance * this.numberFamilyMembers;
  }

  public getfamilyMembersValue() {
    this.familyMembersValueCalculation()

    return {
      familyMembersValue: this.familyMembersValueCalculation()
    }
  }


}