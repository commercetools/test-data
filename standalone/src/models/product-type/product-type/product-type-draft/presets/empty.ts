import type { TProductTypeDraftBuilder } from '../../types';
import ProductType from '../builder';

const empty = (): TProductTypeDraftBuilder =>
  ProductType().key(undefined).attributes(undefined);

export default empty;
