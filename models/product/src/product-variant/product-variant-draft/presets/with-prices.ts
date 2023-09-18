import { PriceDraft } from '@commercetools-test-data/commons';
import ProductVariantDraft from '../builder';

const withPrices = () =>
  ProductVariantDraft().prices([PriceDraft.presets.minimal()]);

export default withPrices;
