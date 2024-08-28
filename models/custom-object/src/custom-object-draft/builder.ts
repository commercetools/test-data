import { Builder } from '@commercetools-test-data/core';
import type { TCustomObjectDraft, TCreateCustomObjectDraftBuilder } from '../types';
import generator from './generator';
import transformers from './transformers';

const CustomObjectDraft: TCreateCustomObjectDraftBuilder = () =>
  Builder<TCustomObjectDraft>({
    generator,
    transformers,
  });

export default CustomObjectDraft;
