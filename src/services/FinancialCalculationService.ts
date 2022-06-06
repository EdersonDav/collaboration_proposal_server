export class FinancialCalculationService {
  private baseValue: number;
  private workScheduleExemption: number;

  private vacationsChristmasTwelfth!: number;
  private workScheduleExemptionValue!: number;

  constructor(baseValue: number, workScheduleExemption: number) {
    this.baseValue = baseValue;
    this.workScheduleExemption = workScheduleExemption;
  }

  private workScheduleExemptionValueCalculation() {
    this.workScheduleExemptionValue = this.baseValue * (this.workScheduleExemption / 100);
  }

  private vacationsChristmasTwelfthCalculation() {
    this.vacationsChristmasTwelfth = (this.baseValue + this.workScheduleExemptionValue) / 12;
  }


  public getWorkVacationAndChristmasVales() {
    this.workScheduleExemptionValueCalculation();
    this.vacationsChristmasTwelfthCalculation();

    return {
      vacationsChristmasTwelfth: this.vacationsChristmasTwelfth,
      workScheduleExemptionValue: this.workScheduleExemption
    }
  }


}