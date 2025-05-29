import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import { TCustomObject, TCreateCustomObjectBuilder } from './types';

const Model: TCreateCustomObjectBuilder = () =>
  Builder<TCustomObject>({
    generator,
    transformers,
  });

export default Model;
