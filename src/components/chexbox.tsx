import { Checkbox } from "antd";

interface BaseCheckboxGroupProps {
  options: string[];
  onChange: (checkedValues: string[]) => void;
}

export const BaseChexboxGroup = ({ options, onChange }: BaseCheckboxGroupProps) => {
  return (
    <Checkbox.Group 
      options={options} 
      onChange={onChange} 
      className="flex flex-col gap-2 mb-4"
    />
  );
};
