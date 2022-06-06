import { Router } from "express";

import { BenefitsCalculationController } from '../controllers/BenefitsCalculationController';

const benefitsCalculationController = new BenefitsCalculationController();

const benefitsCalculationRoutes = Router()

benefitsCalculationRoutes.post("/", benefitsCalculationController.benefitsCalculation)

export { benefitsCalculationRoutes };