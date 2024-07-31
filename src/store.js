import * as reduxToolkit from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import rootReducer from 'reducers'

const store = () => {
  const store = reduxToolkit.configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(thunk),
  })

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default store
