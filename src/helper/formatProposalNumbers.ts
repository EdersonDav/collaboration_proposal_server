import { IProposalConstructor } from "../@types/interfaces";

export const formatProposalNumbers = (values: IProposalConstructor) => {
  let formatNumbers = {} as IProposalConstructor
  for (const key in values) {
    const value = values[key as keyof IProposalConstructor]
    formatNumbers[key as keyof IProposalConstructor] = value && !isNaN(Number(value)) ? Number(value) : value
  }

  return formatNumbers
}
