import { Transformer } from '@commercetools-test-data/core';
import type { TLineItemReturnItem, TLineItemReturnItemGraphql } from './types';

const transformers = {
  default: Transformer<TLineItemReturnItem, TLineItemReturnItem>('default', {
    buildFields: [],
  }),
  rest: Transformer<TLineItemReturnItem, TLineItemReturnItem>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TLineItemReturnItem, TLineItemReturnItemGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'LineItemReturnItem',
      }),
    }
  ),
};

export default transformers;
