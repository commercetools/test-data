import { TProductDiscountDraftBuilder } from '../../types';
import ProductDiscountDraft from '../builder';

const empty = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft()
    .key(undefined)
    .description(undefined)
    .validFrom(undefined)
    .validUntil(undefined);

export default empty;
