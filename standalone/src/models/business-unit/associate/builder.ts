import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TAssociateDefault, TCreateAssociateBuilder } from './types';

const Model: TCreateAssociateBuilder = () =>
  Builder<TAssociateDefault>({
    generator,
    transformers,
  });

export default Model;
