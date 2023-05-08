import type { Channel } from '@commercetools/platform-sdk';
import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateChannelBuilder } from './types';

const Model: TCreateChannelBuilder = () =>
  Builder<Channel>({
    generator,
    transformers,
  });

export default Model;
