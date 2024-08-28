import { Transformer } from '@commercetools-test-data/core';
import { TStoreLimitsProjection, TStoreLimitsProjectionGraphql } from './types';

const transformers = {
  default: Transformer<TStoreLimitsProjection, TStoreLimitsProjection>(
    'default',
    {
      buildFields: [
        'total',
        'inventorySupplyChannels',
        'productDistributionChannels',
      ],
    }
  ),
  rest: Transformer<TStoreLimitsProjection, TStoreLimitsProjection>('rest', {
    buildFields: [
      'total',
      'inventorySupplyChannels',
      'productDistributionChannels',
    ],
  }),
  graphql: Transformer<TStoreLimitsProjection, TStoreLimitsProjectionGraphql>(
    'graphql',
    {
      buildFields: [
        'total',
        'inventorySupplyChannels',
        'productDistributionChannels',
      ],
      addFields: () => ({
        __typename: 'StoreLimitsProjection',
      }),
    }
  ),
};

export default transformers;
