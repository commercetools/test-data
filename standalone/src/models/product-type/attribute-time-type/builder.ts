import { Builder } from '../../../core';
import { generator } from './generator';
import transformers from './transformers';
import { TAttributeTimeType, TCreateAttributeTimeTypeBuilder } from './types';

const Model: TCreateAttributeTimeTypeBuilder = () =>
  Builder<TAttributeTimeType>({
    generator,
    transformers,
  });

export default Model;
