import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeLocalizableTextTypeDraft,
  TCreateAttributeLocalizableTextTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeLocalizableTextTypeDraftBuilder = () =>
  Builder<TAttributeLocalizableTextTypeDraft>({
    generator,
    transformers,
  });

export default Model;
