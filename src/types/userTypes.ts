export namespace UserTypes {
  export interface AuthUserTypes {
    email: string;
    username: string;
    isAuth: boolean;
    id:string
  }

  export interface IUser {
    user: AuthUserTypes | null;
  }

  export interface UserAdditionalInfoType extends UserFormRegisterType{
    correctAnswers: number;
  }

  export interface UserFormRegisterType {
    email: string;
    password: string;
    username: string;
  }

  export interface UserFormLoginType {
    username: string;
    password: string;
  }

  export interface UserCheckType extends UserFormLoginType {}

  export interface UseAuthHookType extends AuthUserTypes {
    isAuth: boolean;
  }
}
