import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCategoryDraftBuilder, TCategoryDraft } from '../types';

const Model: TCreateCategoryDraftBuilder = () =>
  Builder<TCategoryDraft>({
    generator,
    transformers,
  });

export default Model;
