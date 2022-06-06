import { Router } from "express";

import { FinancialCalculationController } from '../controllers/FinancialCalculationController'

const financialCalculationController = new FinancialCalculationController();

const financialCalculationRoutes = Router()

financialCalculationRoutes.post("/", financialCalculationController.financialCalculation)

export { financialCalculationRoutes };