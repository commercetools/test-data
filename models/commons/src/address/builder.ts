import { Builder } from '@commercetools-test-data/core';
import type { TCreateAddressBuilder, TAddress } from './types';
import generator from './generator';
import transformers from './transformers';

const Address: TCreateAddressBuilder = () =>
  Builder<TAddress>({
    generator,
    transformers,
  });

export default Address;
