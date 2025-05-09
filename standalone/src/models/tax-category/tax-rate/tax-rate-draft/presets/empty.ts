import type { TTaxRateDraftBuilder } from '../../types';
import TaxRateDraft from '../builder';

const empty = (): TTaxRateDraftBuilder =>
  TaxRateDraft().amount(undefined).state(undefined).subRates(undefined);

export default empty;
