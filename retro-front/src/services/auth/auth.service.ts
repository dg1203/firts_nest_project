import axios from 'axios';
import {
  LoginInterface,
  RegisterInterface,
  AuthServiceInterface
} from './type';

export default class AuthService implements AuthServiceInterface {
  register = async (body: RegisterInterface) => {
    return await axios.post('api/auth/register', body);
  };

  login = async (body: LoginInterface) => {
    return await axios.post('api/auth/login', body);
  };

  current = async () => {
    const accesToken = localStorage.getItem('accessToken');
    return await axios.get('api/auth/current', { headers: { Authorization: `Bearer ${accesToken}` } });
  }
}
