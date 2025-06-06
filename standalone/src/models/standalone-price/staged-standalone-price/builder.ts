import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TStagedStandalonePrice,
  TCreateStagedStandalonePriceBuilder,
} from './types';

const Model: TCreateStagedStandalonePriceBuilder = () =>
  Builder<TStagedStandalonePrice>({
    generator,
    transformers,
  });

export default Model;
