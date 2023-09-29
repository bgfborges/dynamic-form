/* eslint-disable react-hooks/exhaustive-deps */
import { get } from 'lodash'
import { connect, ConnectedProps } from 'react-redux'
import { ACTIVATE_FORM_RESULT } from '../../constants/formConstants';
import { IFormData } from '../../interfaces/IFormData'
import { DisplayResults } from './DisplayResults'

interface RootState {
  formR: {
    results: IFormData[]
    activeResult: string | null
  };
}

const mapStateToProps = (state: RootState) => {
  const formResults = get(state, 'formR.results');
  const activeResult = get(state, 'formR.activeResult');

  return {
    formResults,
    activeResult,
  };
};

const DisplayResultsC: React.FC<IDisplayC> = ({ 
  formResults, 
  dispatch,
  activeResult,
}) => {
  const handleActiveAsResult = (id: string) => {
    dispatch({
      type: ACTIVATE_FORM_RESULT,
      id,
    })
  }

  return <DisplayResults data={formResults} active={activeResult} activate={handleActiveAsResult} />
};

export const connector = connect(mapStateToProps)

type IDisplayC = ConnectedProps<typeof connector>

export default connector(DisplayResultsC)