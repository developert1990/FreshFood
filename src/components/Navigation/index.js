import withHooks from 'hook-hoc';
import { useUser } from '../../hooks/useUser';
import { Navigation } from './Navigation';

export const Navigation_HOC = withHooks(useUser)(Navigation);