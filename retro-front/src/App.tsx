import React, {
  FunctionComponent,
  useContext,
  useEffect
} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import GlobalStyles from './utils/GlobalStyles';
import AuthService from './services/auth/auth.service';
import PublicRoute from './hoc/PublicRoute';
import ProtectedRoute from './hoc/ProtectedRoute';
import AuthContext from './context/auth/authContext';

import Toast from './components/Toast';
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateQuestion from "./pages/CreatoQuestion";
import Text from "./pages/Text";
import Select from './pages/Select';
import Checkbox from './pages/Checkbox';
import Search from './pages/Search';
import Question from './pages/Question';

const App: FunctionComponent = () => {
  const authService = new AuthService();
  const authContext = useContext(AuthContext);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await authService.current();
      authContext.setUser({
        accessToken: localStorage.getItem('accessToken'),
        ...response.data
      });
    } catch (e) {
      authContext.setUser(null);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Toast />
        <Router>
          <PublicRoute component={Home} path="/" exact />
          <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={Register} path="/register" exact />
          <PublicRoute component={CreateQuestion} path="/createQuestion" exact />
          <PublicRoute component={Text} path="/createQuestion/text" exact />
          <PublicRoute component={Select} path="/createQuestion/select" exact />
          <PublicRoute component={Checkbox} path="/createQuestion/checkbox" exact />
          <PublicRoute component={Search} path="/search" exact />
          <PublicRoute component={Question} path="/question/:id" exact />
          <ProtectedRoute component={Dashboard} path="/dashboard" exact />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
