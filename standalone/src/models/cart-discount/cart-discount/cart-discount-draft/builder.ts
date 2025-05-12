import { Builder } from '../../../../core';
import type {
  TCreateCartDiscountDraftBuilder,
  TCartDiscountDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountDraftBuilder = () =>
  Builder<TCartDiscountDraft>({
    generator,
    transformers,
  });

export default Model;
