import { IProposalConstructor, IProposalResult } from '../@types/interfaces';
import { DeductionsService } from './DeductionsService';
import { ValuesService } from './ValuesService';
import { CostsService } from './CostsService';

export class CollaborationProposalService {
  private proposalValuesContructor: IProposalConstructor

  constructor(
    proposalValuesContructor: IProposalConstructor
  ) {
    this.proposalValuesContructor = proposalValuesContructor
  }

  public proposalResult(): IProposalResult {
    const deductionsService = new DeductionsService(
      this.proposalValuesContructor
    );

    const deductions = deductionsService.getDeductionsValues();

    const valuesService = new ValuesService(
      { ...this.proposalValuesContructor, deductions }
    );

    const values = valuesService.getValues();

    const costsService = new CostsService(
      { values }
    );

    const costs = costsService.getCosts();

    return {
      costs,
      deductions,
      values
    }
  }

}