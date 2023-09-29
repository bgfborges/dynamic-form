import { IField } from "../../interfaces/IFormData"

export const InputField = ({ type, label }: IField) => {
    return (
        <div>
            <label>{label}</label>
            <input name={label} type={type} />
        </div>
    )
}