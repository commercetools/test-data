import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateUserBuilder, TUser } from './types';

const Model: TCreateUserBuilder = () =>
  Builder<TUser>({
    generator,
    transformers,
  });

export default Model;
