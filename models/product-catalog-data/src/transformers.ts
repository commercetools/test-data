import { Transformer } from '@commercetools-test-data/core';
import type { TProductCatalogData, TProductCatalogDataGraphql } from './types';

const transformers = {
  default: Transformer<TProductCatalogData, TProductCatalogData>('default', {
    buildFields: ['current', 'staged'],
  }),
  rest: Transformer<TProductCatalogData, TProductCatalogData>('rest', {
    buildFields: ['current', 'staged'],
  }),
  graphql: Transformer<TProductCatalogData, TProductCatalogDataGraphql>(
    'graphql',
    {
      buildFields: ['current', 'staged'],
      addFields: () => ({
        __typename: 'ProductCatalogData',
      }),
    }
  ),
};

export default transformers;
