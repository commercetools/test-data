import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAttributeDefinitionDraftBuilder,
  TAttributeDefinitionDraft,
} from './types';

const Model: TCreateAttributeDefinitionDraftBuilder = () =>
  Builder<TAttributeDefinitionDraft>({
    generator,
    transformers,
  });

export default Model;
