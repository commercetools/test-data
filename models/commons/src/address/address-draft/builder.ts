import { Builder } from '@commercetools-test-data/core';
import type { TCreateAddressDraftBuilder, TAddressDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const AddressDraft: TCreateAddressDraftBuilder = () =>
  Builder<TAddressDraft>({
    generator,
    transformers,
  });

export default AddressDraft;
