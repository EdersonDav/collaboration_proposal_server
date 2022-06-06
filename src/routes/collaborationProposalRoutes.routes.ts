import { Router } from "express";

import { CollaborationProposalController } from '../controllers/CollaborationProposalController'

const collaborationProposalController = new CollaborationProposalController();

const collaborationProposalRoutes = Router()

collaborationProposalRoutes.get("/", collaborationProposalController.collaborationProposal)

export { collaborationProposalRoutes };