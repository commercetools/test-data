import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TStagedQuote, TCreateStagedQuoteBuilder } from './types';

const Model: TCreateStagedQuoteBuilder = () =>
  Builder<TStagedQuote>({
    generator,
    transformers,
  });

export default Model;
