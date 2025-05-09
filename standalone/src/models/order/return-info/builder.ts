import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateReturnInfoBuilder, TReturnInfo } from './types';

const Model: TCreateReturnInfoBuilder = () =>
  Builder<TReturnInfo>({
    generator,
    transformers,
  });

export default Model;
