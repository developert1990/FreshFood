import withHook from 'hook-hoc';
import { useStep } from '../../hooks/useStep';
import Component from './Cart';

export const Cart = withHook(useStep)(Component);
