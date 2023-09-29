import { get, map } from "lodash";
import { FormEvent } from "react";
import { IField, IFormData } from "../../interfaces/IFormData"
import { InputField } from "../InputField/InputField";
import { SelectField } from "../SelectField/SelectField";
import { Button } from "./styled";

interface IForm {
    data: IFormData
    onSubmission: (e: FormEvent<HTMLFormElement>) => void
}

export const Form = ({ data, onSubmission }: IForm) => {
    const settings = get(data, 'settings')
    const fields = get(data, 'fields')

    return (
        <form onSubmit={onSubmission} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
        }}>
            <h2>{get(settings, 'formTitle')}</h2>

            {
                map(fields, 
                    (fieldData: IField, key) => 
                    get(fieldData, 'type') === 'select' 
                    ? <SelectField key={key} {...fieldData} />
                    : <InputField key={key} {...fieldData} />
                )
            }

            <Button type='submit'>{get(settings, 'submitButton')}</Button>
        </form>
    )
}