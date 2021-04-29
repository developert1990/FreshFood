import withHooks from 'hook-hoc';
import { SignUp } from './SignUp';
import { useSignUp } from '../hooks/useSignUp';

export const SignUp_HOC = withHooks(useSignUp)(SignUp);