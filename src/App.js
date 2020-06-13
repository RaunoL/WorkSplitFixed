import React from 'react';
import {
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import "./styles/main.scss";
import Main from "./views/Main";
import { AuthProvider } from "./services/firebase/Auth"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Main} ></ProtectedRoute>
        </Switch>
      </Router>
    </AuthProvider >
  );
}

export default App;
