import { Builder } from '@commercetools-test-data/core';
import transformers from '../transformers';
import { TCustomObjectDraft, TCreateCustomObjectDraftBuilder } from '../types';
import generator from './generator';

const CustomObjectDraft: TCreateCustomObjectDraftBuilder = () =>
  Builder<TCustomObjectDraft>({
    generator,
    transformers,
  });

export default CustomObjectDraft;
