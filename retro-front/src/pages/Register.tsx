import React, {
  FormEvent,
  FunctionComponent,
  useContext,
  useState
} from 'react';
import { Redirect } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import BigInput from '../components/BigInput';
import BigButton from '../components/BigButton';
import ToastContext from '../context/toast/toastContext';
import AuthService from '../services/auth/auth.service';
import { RegisterInterface } from '../services/auth/type';

const Register: FunctionComponent = () => {
  const authService = new AuthService();
  const toastContext = useContext(ToastContext);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formBody, setFormBody] = useState<RegisterInterface>({
    name: '',
    surname: '',
    password: '',
    email: ''
  });
  const onRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await authService.register(formBody);
      toastContext.setMessage(response.data.message, 'success');
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      toastContext.setMessage(error.response.data.message, 'error');
      setLoading(false);
    }
  };
  return success ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <Wrapper justifyContent="center" alignItems="center">
      <Card maxWidth={500}>
        <form onSubmit={event => onRegister(event)}>
          <BigInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={event =>
              setFormBody({ ...formBody, name: event.target.value })
            }
            required
          />
          <BigInput
            type="text"
            name="surname"
            placeholder="Surname"
            onChange={event =>
              setFormBody({ ...formBody, surname: event.target.value })
            }
            required
          />
          <BigInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={event =>
              setFormBody({ ...formBody, email: event.target.value })
            }
            required
          />
          <BigInput
            type="password"
            name="password"
            placeholder="Password"
            onChange={event =>
              setFormBody({ ...formBody, password: event.target.value })
            }
            required
          />
          <BigButton isLoading={loading} isDisabled={loading}>
            Save
          </BigButton>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Register;
