import withHooks from 'hook-hoc';
import { SignUp } from './SignUp';
import { useSignUp } from '../hooks/useSignUp';
import { useItems } from '../hooks/useItems';
import { AddItems } from './AddItems';
import { useRegister } from '../hooks/useRegister';
import { Register } from './Register';
import { useSignIn } from '../hooks/useSignIn';
import { SignIn } from './SignIn';

export const SignUp_HOC = withHooks(useSignUp)(SignUp);
export const AddItems_HOC = withHooks(useItems)(AddItems);
export const Register_HOC = withHooks(useRegister)(Register);
export const SignIn_HOC = withHooks(useSignIn)(SignIn);