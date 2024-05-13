import { RuleInputInterface } from "./RuleInputInterface";
export interface FormDataFieldsInterface {
  name: string;
  label: string;
  placeholder?: string;
  rules: RuleInputInterface[];
  options?: { value: string; label: string }[];
}
