import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateLocalizedStringDraftBuilder,
  TLocalizedStringDraft,
} from '../types';

const Model: TCreateLocalizedStringDraftBuilder = () =>
  Builder<TLocalizedStringDraft>({
    generator,
    transformers,
  });

export default Model;
