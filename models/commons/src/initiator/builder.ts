import { Builder } from '@commercetools-test-data/core';
import type { TCreateInitiatorBuilder, TInitiator } from './types';
import generator from './generator';
import transformers from './transformers';

const Initiator: TCreateInitiatorBuilder = () =>
  Builder<TInitiator>({
    generator,
    transformers,
  });

export default Initiator;
