import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateProjectBuilder, TProject } from './types';

const Model: TCreateProjectBuilder = () =>
  Builder<TProject>({
    generator,
    transformers,
  });

export default Model;
