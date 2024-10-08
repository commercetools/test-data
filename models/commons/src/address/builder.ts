import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateAddressBuilder, TAddress } from './types';

const Model: TCreateAddressBuilder = () =>
  Builder<TAddress>({
    name: 'Address',
    generator,
    transformers,
  });

export default Model;
