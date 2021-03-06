import withHooks from 'hook-hoc';
import { ProgressBar } from './ProgressBar';
import { useStep } from '../../hooks/useStep';

export const ProgressBarHOC = withHooks(useStep)(ProgressBar);