import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import { TAttributeDateType, TCreateAttributeDateTypeBuilder } from './types';

const Model: TCreateAttributeDateTypeBuilder = () =>
  Builder<TAttributeDateType>({
    generator,
    transformers,
  });

export default Model;
