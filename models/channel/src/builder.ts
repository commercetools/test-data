import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateChannelBuilder, TChannel } from './types';

const Channel: TCreateChannelBuilder = () =>
  Builder<TChannel>({
    generator,
    transformers,
  });

export default Channel;
