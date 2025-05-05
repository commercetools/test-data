import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributeMoneyTypeDraftGraphql,
  TAttributeMoneyTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeMoneyTypeDraft, TAttributeMoneyTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributeMoneyTypeDraft, TAttributeMoneyTypeDraft>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TAttributeMoneyTypeDraft,
    TAttributeMoneyTypeDraftGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: () => ({
      money: {
        dummy: null,
      },
    }),
  }),
};

export default transformers;
