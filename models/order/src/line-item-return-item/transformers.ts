import { Transformer } from '@commercetools-test-data/core';
import type { TLineItemReturnItem, TLineItemReturnItemGraphql } from './types';

const transformers = {
  default: Transformer<TLineItemReturnItem, TLineItemReturnItem>('default', {
    buildFields: ['custom'],
  }),
  rest: Transformer<TLineItemReturnItem, TLineItemReturnItem>('rest', {
    buildFields: ['custom'],
  }),
  graphql: Transformer<TLineItemReturnItem, TLineItemReturnItemGraphql>(
    'graphql',
    {
      buildFields: ['custom'],
      addFields: () => ({
        __typename: 'LineItemReturnItem',
      }),
    }
  ),
};

export default transformers;
