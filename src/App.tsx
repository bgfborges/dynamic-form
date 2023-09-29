import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import DisplayResultsC from './components/DisplayResults/DisplayResultsC';
import FormC from './components/Form/FormC';
import { persistor, store } from "./state-layer/store";

import { 
  CONTACT_FORM, 
  LOGIN_FORM ,
} from './constants/formConstants';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="App">
          <FormC id={CONTACT_FORM} />
          <FormC id={LOGIN_FORM} />
          <DisplayResultsC />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
