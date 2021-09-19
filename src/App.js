import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";

import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="boder bg-light">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
