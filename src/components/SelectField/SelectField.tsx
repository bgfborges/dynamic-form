import { map } from "lodash";
import { IField } from "../../interfaces/IFormData";

export const SelectField = ({ options, label }: IField) => {
    return (
        <div>
            <label>{label}</label>

            <select name={label}>
                {options && map(options, (option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}