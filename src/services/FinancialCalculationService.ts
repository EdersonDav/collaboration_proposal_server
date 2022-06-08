import { formatNumber } from "../helper/formatNumber";

export class FinancialCalculationService {
  private baseValue: number;
  private workScheduleExemption: number;
  private workScheduleExemptionValue!: number;

  constructor(baseValue: number, workScheduleExemption: number) {
    this.baseValue = baseValue;
    this.workScheduleExemption = workScheduleExemption;
  }

  private workScheduleExemptionValueCalculation() {
    this.workScheduleExemptionValue = formatNumber(this.baseValue * (this.workScheduleExemption / 100));
  }

  private vacationsTwelfthCalculation() {
    return formatNumber((this.baseValue + this.workScheduleExemptionValue) / 12);
  }

  private christmasTwelfthCalculation() {
    return formatNumber((this.baseValue + this.workScheduleExemptionValue) / 12);
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