import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateProjectExpiryBuilder, TProjectExpiry } from './types';

const Model: TCreateProjectExpiryBuilder = () =>
  Builder<TProjectExpiry>({
    generator,
    transformers,
  });

export default Model;
