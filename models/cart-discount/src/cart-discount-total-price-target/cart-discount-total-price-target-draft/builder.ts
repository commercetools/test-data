import { Builder } from '@commercetools-test-data/core';
import type {
  TCartDiscountTotalPriceTargetDraft,
  TCreateCartDiscountTotalPriceTargetDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountTotalPriceTargetDraftBuilder = () =>
  Builder<TCartDiscountTotalPriceTargetDraft>({
    generator,
    transformers,
  });

export default Model;
