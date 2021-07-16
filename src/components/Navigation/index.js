import withHooks from 'hook-hoc';
import { Navigation } from './Navigation';
import { useUser } from '../../hooks/useUser';

export const NavigationHOC = withHooks(useUser)(Navigation);