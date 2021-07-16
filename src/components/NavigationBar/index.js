import withHooks from 'hook-hoc';
import { useUser } from '../../hooks/useUser';
import { NavigationBar } from './NavigationBar';

export const NavigationBarHOC = withHooks(useUser)(NavigationBar);