/* eslint-disable react-hooks/exhaustive-deps */
import { get } from 'lodash';
import { FormEvent, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IFormData } from '../../interfaces/IFormData';
import { Form } from './Form';

import { 
    REQUEST_FORM_COMPONENT,
    SUBMIT_FORM_COMPONENT,
} from '../../constants/formConstants';

interface RootState {
  formR: IFormData;
}

interface MapStateProps {
  id: string
}

const mapStateToProps = ({ formR }: RootState, { id }: MapStateProps) => {
  const formData = get(formR, `data.${id}`) as unknown as IFormData;

  return {
    formData,
    id,
  };
};

const FormC: React.FC<IFormC> = ({ formData, id, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: REQUEST_FORM_COMPONENT,
      id,
    })
  }, [])

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));

    dispatch({
        type: SUBMIT_FORM_COMPONENT,
        data: {
          settings: formData.settings,
          fields: data,
        },
    })
  }
  
  return <Form data={formData} onSubmission={handleFormSubmit} />
};

export const connector = connect(mapStateToProps)

type IFormC = ConnectedProps<typeof connector>

export default connector(FormC)