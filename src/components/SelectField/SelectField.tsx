import { map } from "lodash";
import { IField } from "../../interfaces/IFormData";
import { Label, Select } from "./styled";

export const SelectField = ({ options, label }: IField) => {
    return (
        <div>
            <Label>{label}</Label>

            <Select name={label}>
                {options && map(options, (option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                ))}
            </Select>
        </div>
    )
}