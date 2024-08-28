import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeSetTypeDraft,
  TCreateAttributeSetTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeSetTypeDraftBuilder = () =>
  Builder<TAttributeSetTypeDraft>({
    generator,
    transformers,
  });

export default Model;
