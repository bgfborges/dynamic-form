import { IField } from "../../interfaces/IFormData"
import { Input, Label } from "./styles"

export const InputField = ({ type, label }: IField) => {
    return (
        <div>
            <Label>{label}</Label>
            <Input name={label} type={type} />
        </div>
    )
}