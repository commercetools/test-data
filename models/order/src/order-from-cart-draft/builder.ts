import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateOrderFromCartDraftBuilder,
  TOrderFromCartDraft,
} from '../types';

const Model: TCreateOrderFromCartDraftBuilder = () =>
  Builder<TOrderFromCartDraft>({
    generator,
    transformers,
  });

export default Model;
