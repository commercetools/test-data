import { Transformer } from '@commercetools-test-data/core';
import { TCustomFieldMoneyTypeGraphql, TCustomFieldMoneyType } from './types';

const transformers = {
  default: Transformer<TCustomFieldMoneyType, TCustomFieldMoneyType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldMoneyType, TCustomFieldMoneyType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldMoneyType, TCustomFieldMoneyTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'MoneyCustomFieldType',
      }),
    }
  ),
};

export default transformers;
