import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TStandalonePriceDraft,
  TCreateStandalonePriceDraftBuilder,
} from '../types';

const StandalonePriceDraft: TCreateStandalonePriceDraftBuilder = () =>
  Builder<TStandalonePriceDraft>({
    generator,
    transformers,
  });

export default StandalonePriceDraft;
