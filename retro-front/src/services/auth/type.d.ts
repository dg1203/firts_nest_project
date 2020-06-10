interface RegisterInterface {
  name: string;
  surname: string;
  password: string;
  email: string;
}

interface LoginInterface {
  email: string;
  password: string;
}

interface UserInterface {
  accessToken: string;
  userEmail: string;
  userRole: number;
  userName: string;
  userSurname: string;
  userId: string;
}

interface AuthServiceInterface {
  register: (body: RegisterInterface) => Promise<any>;
  login: (body: LoginInterface) => Promise<any>;
}

export {
  RegisterInterface,
  LoginInterface,
  AuthServiceInterface,
  UserInterface
};
