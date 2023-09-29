/* eslint-disable react-hooks/exhaustive-deps */
import { get } from 'lodash'
import { connect, ConnectedProps } from 'react-redux'
import { IFormData } from '../../interfaces/IFormData'
import { DisplayResults } from './DisplayResults'

interface RootState {
  formR: {
    results: IFormData[];
  };
}

const mapStateToProps = (state: RootState) => {
  const formResults = get(state, 'formR.results');

  return {
    formResults,
  };
};

const DisplayResultsC: React.FC<IDisplayC> = ({ formResults }) => {
  return <DisplayResults data={formResults} />
};

export const connector = connect(mapStateToProps)

type IDisplayC = ConnectedProps<typeof connector>

export default connector(DisplayResultsC)