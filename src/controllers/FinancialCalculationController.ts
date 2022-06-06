import { Request, Response } from "express";
import { validNumbers } from "../helper/validNumbers";
import { FinancialCalculationService } from '../services/FinancialCalculationService';

export class FinancialCalculationController {
  public async financialCalculation(req: Request, res: Response) {
    const { baseValue, workScheduleExemption } = req.body;

    if (!validNumbers(workScheduleExemption) || !validNumbers(baseValue)) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const financialCalculationService = new FinancialCalculationService(baseValue, workScheduleExemption);

    const data = financialCalculationService.getWorkVacationAndChristmasVales()

    return res.json(data);
  }
}