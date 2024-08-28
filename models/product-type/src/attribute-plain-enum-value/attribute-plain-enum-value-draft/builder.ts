import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributePlainEnumValueDraft,
  TCreateAttributePlainEnumValueDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributePlainEnumValueDraftBuilder = () =>
  Builder<TAttributePlainEnumValueDraft>({
    generator,
    transformers,
  });

export default Model;
