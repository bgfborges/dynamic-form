import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./state-layer/store";
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
          <Contact />
      </PersistGate>
    </Provider>
  );
}

export default App;
