import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import { TAttributeMoneyType, TCreateAttributeMoneyTypeBuilder } from './types';

const Model: TCreateAttributeMoneyTypeBuilder = () =>
  Builder<TAttributeMoneyType>({
    generator,
    transformers,
  });

export default Model;
