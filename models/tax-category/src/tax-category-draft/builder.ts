import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateTaxCategoryDraftBuilder,
  TTaxCategoryDraft,
} from '../types';

const Model: TCreateTaxCategoryDraftBuilder = () =>
  Builder<TTaxCategoryDraft>({
    generator,
    transformers,
  });

export default Model;
