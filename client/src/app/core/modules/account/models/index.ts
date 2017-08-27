export interface IUser {
  user_id: number;
  username: string;
  email: string;
  exp: any;
}

export interface IAccountState {
  loggedIn: boolean;
  isAdmin: boolean;
  user: IUser;
  loading: boolean;
  requestErrors: string[];
}

export interface IChangePassword {
  old_password: string;
  new_password1: string;
  new_password2: string;
}

export interface IForgottenPasswordConfirm {
  token: string;
  uid: string;
  newPassword1: string;
  newPassword2: string;
}

export interface IForgottenPasswordRequest {
  email: string;
}

export interface ILogout {
}

export interface IRegister {
  username?: string;
  password2: string;
  password1: string;
  email: string;
}

export interface ILogin {
  username?: string;
  password: string;
  email?: string;
}
