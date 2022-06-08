import nodemailer from 'nodemailer';

import { ProposalResume } from '../@types/interfaces';
import { proposalResumeObject } from '../helper/proposalResumeArrayKeys';

export class Email {
  private proposalResume: ProposalResume | any;

  constructor(
    proposalValuesContructor: ProposalResume | any
  ) {
    this.proposalResume = proposalValuesContructor
  }

  private configProduction = {
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_SENHA
    },
    port: Number(process.env.EMAIL_PORT),
    secure: false
  }

  public async sendEmail() {
    const transport = nodemailer.createTransport(this.configProduction);
    await transport.sendMail({
      from: `Proposta de Colaboração <${this.configProduction.auth.user}>`,
      to: this.proposalResume.email,
      subject: 'Proposta de Colaboração',
      html: this.generateHTMLEmail(),
      text: this.generateTextEmail()
    })
  }

  private generateHTMLEmail() {
    const body = `
      <h1> Proposta de Colaboração para ${this.proposalResume.name} com data de inicio em ${this.proposalResume.collaborationStartDate}</h1>
      <br />
      ${proposalResumeObject.map(data => {
      return `<p> ${data.label}: 
          <span>
            ${this.proposalResume[data.key]}
            ${data.label.includes('%') ? ' %' : data.label.includes('€') && this.proposalResume[data.key] ? ' €' : ''}
          </span>
        </p>`
    })}
    `
    return body.split(',').join('')
  }

  private generateTextEmail() {
    const body = `
      Proposta de Colaboração para ${this.proposalResume.name} com data de inicio em ${this.proposalResume.collaborationStartDate}
      ${proposalResumeObject.map(data => {
      return `${data.label}: ${this.proposalResume[data.key]} ${data.label.includes('%') ? ' %' : data.label.includes('€') && this.proposalResume[data.key] ? ' €' : ''}
      `
    })}
    `
    return body.split(',').join('')
  }

}