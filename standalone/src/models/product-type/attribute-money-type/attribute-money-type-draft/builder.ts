import { Builder } from '@/core';
import {
  TAttributeMoneyType,
  TCreateAttributeMoneyTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeMoneyTypeDraftBuilder = () =>
  Builder<TAttributeMoneyType>({
    generator,
    transformers,
  });

export default Model;
