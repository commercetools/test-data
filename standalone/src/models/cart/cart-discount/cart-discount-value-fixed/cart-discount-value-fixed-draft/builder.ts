import { Builder } from '@/core';
import type {
  TCreateCartDiscountValueFixedDraftBuilder,
  TCartDiscountValueFixedDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountValueFixedDraftBuilder = () =>
  Builder<TCartDiscountValueFixedDraft>({
    generator,
    transformers,
  });

export default Model;
