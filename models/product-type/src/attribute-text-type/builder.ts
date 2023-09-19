import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import { TAttributeTextType, TCreateAttributeTextTypeBuilder } from './types';

const Model: TCreateAttributeTextTypeBuilder = () =>
  Builder<TAttributeTextType>({
    generator,
    transformers,
  });

export default Model;
