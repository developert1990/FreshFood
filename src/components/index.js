import withHooks from 'hook-hoc';
import { ProgressBar } from './ProgressBar';
import { useStep } from '../hooks/useStep';
import { useItems } from '../hooks/useItems';
import { AddItems } from './AddItems';

export const ProgressBar_HOC = withHooks(useStep)(ProgressBar);
export const AddItems_HOC = withHooks(useItems)(AddItems);