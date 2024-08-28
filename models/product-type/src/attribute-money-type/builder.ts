import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type { TAttributeMoneyType, TCreateAttributeMoneyTypeBuilder } from './types';

const Model: TCreateAttributeMoneyTypeBuilder = () =>
  Builder<TAttributeMoneyType>({
    generator,
    transformers,
  });

export default Model;
