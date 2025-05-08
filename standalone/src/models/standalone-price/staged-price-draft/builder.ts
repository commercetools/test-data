import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TStagedPriceDraft,
  TCreateStagedPriceDraftBuilder,
} from './types';

const Model: TCreateStagedPriceDraftBuilder = () =>
  Builder<TStagedPriceDraft>({
    generator,
    transformers,
  });

export default Model;
