import { Request, Response } from "express";
import { CollaborationProposalService } from '../services/CollaborationProposalService';
import { validProposalContructValues } from '../helper/validProposalContructValues';

export class CollaborationProposalController {
  public async collaborationProposal(req: Request, res: Response) {
    const proposalValuesContructor = req.body;

    if (!validProposalContructValues(proposalValuesContructor)) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const collaborationProposalService = new CollaborationProposalService(proposalValuesContructor);

    const data = collaborationProposalService.proposalResult()

    return res.json(data);
  }
}
