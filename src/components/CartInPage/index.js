import withHooks from 'hook-hoc';
import { useCart } from '../../hooks/useCart';
import { PageCart as Component } from './PageCart';

export const PageCart = withHooks(useCart)(Component);
