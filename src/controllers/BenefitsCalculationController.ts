import { Request, Response } from "express";
import { BenefitsCalculationService } from '../services/BenefitsCalculationService';
import { validNumbers } from '../helper/validNumbers';

export class BenefitsCalculationController {
  public async benefitsCalculation(req: Request, res: Response) {
    const { numberFamilyMenbers, healthInsurance } = req.body;

    if (!validNumbers(numberFamilyMenbers) || !validNumbers(healthInsurance)) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const benefitsCalculationService = new BenefitsCalculationService(numberFamilyMenbers, healthInsurance);

    const data = {
      familyMenbersValue: benefitsCalculationService.getFamilyMenbersValue()
    }

    return res.json(data);
  }
}
