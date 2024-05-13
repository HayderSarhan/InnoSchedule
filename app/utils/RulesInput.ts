import { RuleInputInterface } from "./RuleInputInterface";

const RulesInput = (name: string): RuleInputInterface[] => {
  const rules: RuleInputInterface[] = [
    {
      required: true,
      message: `${name} is required!`,
    },
  ];
  return rules;
};

export default RulesInput;
