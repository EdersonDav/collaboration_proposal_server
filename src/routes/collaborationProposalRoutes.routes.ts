import { Router } from "express";

import { CollaborationProposalController } from '../controllers/CollaborationProposalController'

const collaborationProposalController = new CollaborationProposalController();

const collaborationProposalRoutes = Router()

collaborationProposalRoutes.post("/", collaborationProposalController.collaborationProposal)

export { collaborationProposalRoutes };