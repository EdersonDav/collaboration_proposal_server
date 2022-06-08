import { Request, Response } from "express";
import { CollaborationProposalService } from '../services/CollaborationProposalService';

export class CollaborationProposalController {
  public collaborationProposal(req: Request, res: Response) {
    const proposalValuesContructor = req.body;
    const collaborationProposalService = new CollaborationProposalService(proposalValuesContructor);

    const data = collaborationProposalService.proposalResult()

    return res.json(data);
  }
}
