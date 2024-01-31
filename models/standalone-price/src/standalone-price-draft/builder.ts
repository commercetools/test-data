import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateStandalonePriceDraftBuilder,
  TStandalonePriceDraft,
} from '../types';

const Model: TCreateStandalonePriceDraftBuilder = () =>
  Builder<TStandalonePriceDraft>({
    generator,
    transformers,
  });

export default Model;
