import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateMessagesConfigurationBuilder,
  TMessagesConfiguration,
} from './types';

const Model: TCreateMessagesConfigurationBuilder = () =>
  Builder<TMessagesConfiguration>({
    generator,
    transformers,
  });

export default Model;
