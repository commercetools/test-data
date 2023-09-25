import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributeSetTypeDraft,
  TAttributeSetTypeDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TAttributeSetTypeDraft, TAttributeSetTypeDraft>(
    'default',
    {
      buildFields: ['elementType'],
    }
  ),
  graphql: Transformer<TAttributeSetTypeDraft, TAttributeSetTypeDraftGraphql>(
    'graphql',
    {
      buildFields: ['elementType'],
    }
  ),
};

export default transformers;
