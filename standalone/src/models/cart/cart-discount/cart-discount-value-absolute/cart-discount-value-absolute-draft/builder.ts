import { Builder } from '@/core';
import type {
  TCreateCartDiscountValueAbsoluteDraftBuilder,
  TCartDiscountValueAbsoluteDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountValueAbsoluteDraftBuilder = () =>
  Builder<TCartDiscountValueAbsoluteDraft>({
    generator,
    transformers,
  });

export default Model;
