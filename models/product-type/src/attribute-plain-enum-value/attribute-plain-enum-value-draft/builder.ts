import { Builder } from '@commercetools-test-data/core';
import {
  TAttributePlainEnumValue,
  TCreateAttributePlainEnumValueDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributePlainEnumValueDraftBuilder = () =>
  Builder<TAttributePlainEnumValue>({
    generator,
    transformers,
  });

export default Model;
