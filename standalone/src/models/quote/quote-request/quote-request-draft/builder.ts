import { Builder } from '@/core';
import type {
  TQuoteRequestDraft,
  TCreateQuoteRequestDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateQuoteRequestDraftBuilder = () =>
  Builder<TQuoteRequestDraft>({
    generator,
    transformers,
  });

export default Model;
