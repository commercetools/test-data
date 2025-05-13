import { Transformer } from '@/core';
import { TAttributeMoneyTypeGraphql, TAttributeMoneyType } from './types';

const transformers = {
  default: Transformer<TAttributeMoneyType, TAttributeMoneyType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeMoneyType, TAttributeMoneyType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeMoneyType, TAttributeMoneyTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'MoneyAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
