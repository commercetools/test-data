import { Builder } from '../../core';
import generator from './generator';
import transformers from './transformers';
import type { TQuote, TCreateQuoteBuilder } from './types';

const Model: TCreateQuoteBuilder = () =>
  Builder<TQuote>({
    generator,
    transformers,
  });

export default Model;
