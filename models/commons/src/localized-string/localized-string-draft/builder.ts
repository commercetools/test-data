import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateLocalizedStringDraftBuilder,
  TLocalizedStringDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateLocalizedStringDraftBuilder = () =>
  Builder<TLocalizedStringDraft>({
    generator,
    transformers,
  });

export default Model;
