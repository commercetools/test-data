import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateCartDiscountValueRelativeDraftBuilder,
  TCartDiscountValueRelativeDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountValueRelativeDraftBuilder = () =>
  Builder<TCartDiscountValueRelativeDraft>({
    generator,
    transformers,
  });

export default Model;
