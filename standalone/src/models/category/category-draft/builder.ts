import { Builder } from '@/core';
import type { TCreateCategoryDraftBuilder, TCategoryDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCategoryDraftBuilder = () =>
  Builder<TCategoryDraft>({
    generator,
    transformers,
  });

export default Model;
