export namespace UserTypes {
  export interface AuthUserTypes {
    id: string;
    email: string;
    username: string;
    isAuth: boolean;
  }

  export interface IUser {
    user: AuthUserTypes | null;
  }

  export interface UserAdditionalInfoType {
    correctAnsvers: number;
  }

  export interface UserFormRegisterType {
    email: string;
    password: string;
    username: string;
  }

  export interface UserFormLoginType {
    email: string;
    username: string;
  }

  export interface UserCheckType extends UserFormLoginType {}

  export interface UseAuthHookType extends AuthUserTypes {
    isAuth: boolean;
  }
}
