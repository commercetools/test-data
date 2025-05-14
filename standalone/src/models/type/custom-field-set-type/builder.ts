import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import { TCustomFieldSetType, TCreateCustomFieldSetTypeBuilder } from './types';

const Model: TCreateCustomFieldSetTypeBuilder = () =>
  Builder<TCustomFieldSetType>({
    generator,
    transformers,
  });

export default Model;
