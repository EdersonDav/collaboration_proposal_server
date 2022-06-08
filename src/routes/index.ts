import { Router } from "express";

import { collaborationProposalRoutes } from './collaborationProposalRoutes.routes';
import { benefitsCalculationRoutes } from './benefitsCalculation.routes';
import { financialCalculationRoutes } from './financialCalculation.routes';
import { proposalResumeRoutes } from './proposalResume.routes';


const router = Router();

router.use("/proposal", collaborationProposalRoutes)
router.use("/finantial", financialCalculationRoutes)
router.use("/benefits", benefitsCalculationRoutes)
router.use("/proposal-resume", proposalResumeRoutes)

export { router };