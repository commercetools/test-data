import { Builder } from '../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCustomerGroupBuilder, TCustomerGroup } from './types';

const Model: TCreateCustomerGroupBuilder = () =>
  Builder<TCustomerGroup>({
    name: 'CustomerGroup',
    generator,
    transformers,
  });

export default Model;
