export class FinancialCalculationService {
  private baseValue: number;
  private workScheduleExemption: number;
  private workScheduleExemptionValue!: number;

  constructor(baseValue: number, workScheduleExemption: number) {
    this.baseValue = baseValue;
    this.workScheduleExemption = workScheduleExemption;
  }

  private workScheduleExemptionValueCalculation() {
    this.workScheduleExemptionValue = this.baseValue * (this.workScheduleExemption / 100);
  }

  private vacationsTwelfthCalculation() {
    return (this.baseValue + this.workScheduleExemptionValue) / 12;
  }

  private christmasTwelfthCalculation() {
    return (this.baseValue + this.workScheduleExemptionValue) / 12;
  }

  public getWorkVacationAndChristmasVales() {
    this.workScheduleExemptionValueCalculation()

    return {
      workScheduleExemptionValue: this.workScheduleExemptionValue,
      vacationsTwelfth: this.vacationsTwelfthCalculation(),
      christmasTwelfth: this.christmasTwelfthCalculation(),
    }
  }


}