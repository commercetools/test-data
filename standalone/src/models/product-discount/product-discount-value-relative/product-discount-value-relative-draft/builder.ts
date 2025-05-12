import { Builder } from '../../../../core';
import type {
  TCreateProductDiscountValueRelativeDraftBuilder,
  TProductDiscountValueRelativeDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductDiscountValueRelativeDraftBuilder = () =>
  Builder<TProductDiscountValueRelativeDraft>({
    generator,
    transformers,
  });

export default Model;
