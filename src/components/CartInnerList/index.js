import withHooks from 'hook-hoc';
import { CartInnerList as Component } from './CartInnerList';
import { useCart } from '../../hooks/useCart';

export const CartInnerList = withHooks(useCart)(Component);