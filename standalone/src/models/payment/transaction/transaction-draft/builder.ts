import { Builder } from '@/core';
import type {
  TCreateTransactionDraftBuilder,
  TTransactionDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateTransactionDraftBuilder = () =>
  Builder<TTransactionDraft>({
    generator,
    transformers,
  });

export default Model;
