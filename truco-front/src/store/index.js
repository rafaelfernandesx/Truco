import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers/index';

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['userReducer'],
    //blacklist: []
}, Reducers);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
