import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TAttribute, TCreateAttributeBuilder } from './types';

const Model: TCreateAttributeBuilder = () =>
  Builder<TAttribute>({
    generator,
    transformers,
  });

export default Model;
