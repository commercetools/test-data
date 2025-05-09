import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import {
  TCustomerGroupLimitsProjection,
  TCreateCustomerGroupLimitsProjectionBuilder,
} from './types';

const Model: TCreateCustomerGroupLimitsProjectionBuilder = () =>
  Builder<TCustomerGroupLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
