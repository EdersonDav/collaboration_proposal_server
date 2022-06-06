import { Router } from "express";

import { collaborationProposalRoutes } from './collaborationProposalRoutes.routes';
import { benefitsCalculationRoutes } from './benefitsCalculation.routes';
import { financialCalculationRoutes } from './financialCalculation.routes';

const router = Router();

router.use("/roposal", collaborationProposalRoutes)
router.use("/finantial", financialCalculationRoutes)
router.use("/benefits", benefitsCalculationRoutes)

export { router };