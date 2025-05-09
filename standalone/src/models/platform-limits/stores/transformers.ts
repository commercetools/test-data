import { Transformer } from '../../../core';
import { TStoreLimitsProjection, TStoreLimitsProjectionGraphql } from './types';

const buildFields: (keyof TStoreLimitsProjection)[] = [
  'total',
  'inventorySupplyChannels',
  'productDistributionChannels',
];

const transformers = {
  default: Transformer<TStoreLimitsProjection, TStoreLimitsProjection>(
    'default',
    { buildFields }
  ),
  rest: Transformer<TStoreLimitsProjection, TStoreLimitsProjection>('rest', {
    buildFields,
  }),
  graphql: Transformer<TStoreLimitsProjection, TStoreLimitsProjectionGraphql>(
    'graphql',
    {
      buildFields,
      addFields: () => ({
        __typename: 'StoreLimitsProjection',
      }),
    }
  ),
};

export default transformers;
