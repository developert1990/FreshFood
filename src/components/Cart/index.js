import withHook from 'hook-hoc';
import { useCart } from '../../hooks/useCart';
import { Cart as Component } from './Cart';

export const Cart = withHook(useCart)(Component);
