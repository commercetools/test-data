import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeLocalizedEnumTypeDraft,
  TCreateAttributeLocalizedEnumTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeLocalizedEnumTypeDraftBuilder = () =>
  Builder<TAttributeLocalizedEnumTypeDraft>({
    generator,
    transformers,
  });

export default Model;
