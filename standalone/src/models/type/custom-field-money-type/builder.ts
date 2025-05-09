import { Builder } from '../../../core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldMoneyType,
  TCreateCustomFieldMoneyTypeBuilder,
} from './types';

const Model: TCreateCustomFieldMoneyTypeBuilder = () =>
  Builder<TCustomFieldMoneyType>({
    generator,
    transformers,
  });

export default Model;
