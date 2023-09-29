import { get } from "lodash";
import { FORM_MAP } from "../../constants/formConstants";

interface IGetForm {
    id: string;
}

export const getForm = ({ id }: IGetForm) => {
    try {
        const form = get(FORM_MAP, id)

        if (form) {
            return form
        } else {
            throw new Error(`Form with id '${id}' not found`)
        }
    } catch (error) {
        console.error('Error loading form:', error)
        return null
    }
};
