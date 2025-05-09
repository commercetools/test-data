import { Builder } from '../../../core';
import type {
  TCreateStandalonePriceDraftBuilder,
  TStandalonePriceDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateStandalonePriceDraftBuilder = () =>
  Builder<TStandalonePriceDraft>({
    generator,
    transformers,
  });

export default Model;
