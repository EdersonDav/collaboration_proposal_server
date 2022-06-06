import { IProposalConstructor } from "../@types/interfaces";
import { validNumbers } from "./validNumbers";

export const validProposalContructValues = (values: IProposalConstructor) => {
  let isValids = true;

  for (const key in values) {
    if (!validNumbers(values[key as keyof IProposalConstructor])) {
      isValids = false;
      break;
    }
  }

  return isValids
}
