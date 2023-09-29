import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { keys } from 'lodash'
import { persistReducers, combinedReducers } from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: keys(persistReducers),
}

const persistedReducers = persistReducer(persistConfig, combinedReducers)

export const store: Store = createStore(
    persistedReducers,
    composeWithDevTools(applyMiddleware(logger))
)

export const persistor = persistStore(store)