import { RouterProvider } from "react-router-dom"
import { mainApp } from "./router/MainRouter"
import { store } from "./Global/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const App = () => {
  let persistor = persistStore(store)
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={mainApp} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App
