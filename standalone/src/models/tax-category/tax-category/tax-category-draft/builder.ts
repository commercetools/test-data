import { Builder } from '@/core';
import type {
  TCreateTaxCategoryDraftBuilder,
  TTaxCategoryDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateTaxCategoryDraftBuilder = () =>
  Builder<TTaxCategoryDraft>({
    generator,
    transformers,
  });

export default Model;
