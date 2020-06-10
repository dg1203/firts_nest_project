import React, {
  FormEvent,
  FunctionComponent,
  useContext,
  useState
} from 'react';
import Card from '../components/Card';
import Wrapper from '../components/Wrapper';
import BigInput from '../components/BigInput';
import BigButton from '../components/BigButton';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth/auth.service';
import ToastContext from '../context/toast/toastContext';
import AuthContext from '../context/auth/authContext';
import { LoginInterface } from "../services/auth/type";

const Login: FunctionComponent = () => {
  const authService = new AuthService();
  const toastContext = useContext(ToastContext);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [formBody, setFormBody] = useState<LoginInterface>({
    email: '',
    password: ''
  });
  const onLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await authService.login(formBody);
      authContext.setUser(response.data);
      setLoading(false);
    } catch (error) {
      toastContext.setMessage(error.response.data.message, 'error');
      setLoading(false);
    }
  };

  return (
    <Wrapper justifyContent="center" alignItems="center">
      <Card maxWidth={500}>
        <form onSubmit={event => onLogin(event)}>
          <BigInput
            value={formBody.email}
            onChange={event =>
              setFormBody({ ...formBody, email: event.target.value })
            }
            type="email"
            placeholder="Email"
            required
          />
          <BigInput
            value={formBody.password}
            onChange={event =>
              setFormBody({ ...formBody, password: event.target.value })
            }
            type="password"
            placeholder="Password"
            required
          />
          <BigButton isLoading={loading} isDisabled={loading}>
            Login
          </BigButton>
          <Link to="/register">Create account</Link>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Login;
