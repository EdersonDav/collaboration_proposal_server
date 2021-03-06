import { Request, Response } from "express";
import { Email } from '../services/Email';

export class ProposalResumeController {
  public async sendProposal(req: Request, res: Response) {
    const proposalResume = req.body;
    const email = new Email(proposalResume)

    try {
      await email.sendEmail();
      return res.json({ message: 'Email send' });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }

  }
}
