import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TCustomFieldMoneyType,
  TCreateCustomFieldMoneyTypeBuilder,
} from './types';

const Model: TCreateCustomFieldMoneyTypeBuilder = () =>
  Builder<TCustomFieldMoneyType>({
    generator,
    transformers,
  });

export default Model;
