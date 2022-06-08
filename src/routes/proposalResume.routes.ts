import { Router } from "express";

import { ProposalResumeController } from '../controllers/ProposalResumeController'

const proposalResumeController = new ProposalResumeController();

const proposalResumeRoutes = Router()

proposalResumeRoutes.post("/", proposalResumeController.sendProposal)

export { proposalResumeRoutes };