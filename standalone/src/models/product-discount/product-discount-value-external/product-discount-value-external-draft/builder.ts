import { Builder } from '../../../../core';
import type {
  TCreateProductDiscountValueExternalDraftBuilder,
  TProductDiscountValueExternalDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductDiscountValueExternalDraftBuilder = () =>
  Builder<TProductDiscountValueExternalDraft>({
    generator,
    transformers,
  });

export default Model;
