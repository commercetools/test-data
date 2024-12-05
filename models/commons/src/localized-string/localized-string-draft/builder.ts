import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateLocalizedStringDraftBuilder,
  TLocalizedStringDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateLocalizedStringDraftBuilder = () =>
  Builder<TLocalizedStringDraft>({
    name: 'LocalizedStringDraft',
    generator,
    transformers,
  });

export default Model;
