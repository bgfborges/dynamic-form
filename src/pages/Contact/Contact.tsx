import DisplayResultsC from '../../components/DisplayResults/DisplayResultsC';
import FormC from '../../components/Form/FormC';
import { Section } from '../../components/Section/Section';

import { 
    CONTACT_FORM as CONTACT_FORM_ID,
    LOGIN_FORM as LOGIN_FORM_ID,
} from '../../constants/formConstants';

export const Contact = () => {
    const Forms = () => {
        return (
            <>
                <FormC id={CONTACT_FORM_ID} />
                <FormC id={LOGIN_FORM_ID} />
            </>
        )
    }

    return (
        <Section 
            sidebar={<DisplayResultsC />}
            page={<Forms />}
        />
    )
}