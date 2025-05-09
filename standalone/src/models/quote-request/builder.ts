import { Builder } from '../../core';
import generator from './generator';
import transformers from './transformers';
import type { TQuoteRequest, TCreateQuoteRequestBuilder } from './types';

const Model: TCreateQuoteRequestBuilder = () =>
  Builder<TQuoteRequest>({
    generator,
    transformers,
  });

export default Model;
