import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCartDiscountShippingCostTarget,
  TCreateCartDiscountShippingCostTargetBuilder,
} from './types';

const Model: TCreateCartDiscountShippingCostTargetBuilder = () =>
  Builder<TCartDiscountShippingCostTarget>({
    generator,
    transformers,
  });

export default Model;
