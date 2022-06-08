import { Request, Response } from "express";
import { BenefitsCalculationService } from '../services/BenefitsCalculationService';
import { validNumbers } from '../helper/validNumbers';

export class BenefitsCalculationController {
  public async benefitsCalculation(req: Request, res: Response) {
    const { numberFamilyMembers, healthInsurance } = req.body;

    if (!validNumbers(numberFamilyMembers) || !validNumbers(healthInsurance)) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const benefitsCalculationService = new BenefitsCalculationService(
      Number(numberFamilyMembers),
      Number(healthInsurance)
    );

    const familyMembersValue = benefitsCalculationService.getfamilyMembersValue()

    return res.json(familyMembersValue);
  }
}
