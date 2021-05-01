import withHooks from 'hook-hoc';
import { SignUp } from './SignUp';
import { useSignUp } from '../hooks/useSignUp';
import { useItems } from '../hooks/useItems';
import { AddItems } from './AddItems';

export const SignUp_HOC = withHooks(useSignUp)(SignUp);
export const AddItems_HOC = withHooks(useItems)(AddItems);