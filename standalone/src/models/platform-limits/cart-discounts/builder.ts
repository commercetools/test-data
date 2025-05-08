import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import {
  TCartDiscountLimitsProjection,
  TCreateCartDiscountLimitsProjectionBuilder,
} from './types';

const Model: TCreateCartDiscountLimitsProjectionBuilder = () =>
  Builder<TCartDiscountLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
