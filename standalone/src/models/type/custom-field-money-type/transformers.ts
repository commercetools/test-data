import { Transformer } from '../../../core';
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
        __typename: 'MoneyType',
      }),
    }
  ),
};

export default transformers;
