import { Builder } from '@commercetools-test-data/core';
import {
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
