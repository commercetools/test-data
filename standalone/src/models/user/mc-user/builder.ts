import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TMcCreateUserBuilder, TMcUser } from './types';

const Model: TMcCreateUserBuilder = () =>
  Builder<TMcUser>({
    generator,
    transformers,
  });

export default Model;
