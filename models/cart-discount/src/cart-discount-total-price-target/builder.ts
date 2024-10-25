import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCartDiscountTotalPriceTarget,
  TCreateCartDiscountTotalPriceTargetBuilder,
} from './types';

const Model: TCreateCartDiscountTotalPriceTargetBuilder = () =>
  Builder<TCartDiscountTotalPriceTarget>({
    generator,
    transformers,
  });

export default Model;
