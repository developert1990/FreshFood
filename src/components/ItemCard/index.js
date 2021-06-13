import withHooks from 'hook-hoc';
import { ItemCard as Componenet } from './ItemCard';
import { useCart } from '../../hooks/useCart';

export const ItemCard = withHooks(useCart)(Componenet);