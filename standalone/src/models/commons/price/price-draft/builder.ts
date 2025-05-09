import { Builder } from '../../../../core';
import type { TCreatePriceDraftBuilder, TPriceDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const PriceDraft: TCreatePriceDraftBuilder = () =>
  Builder<TPriceDraft>({
    name: 'PriceDraft',
    generator,
    transformers,
  });

export default PriceDraft;
