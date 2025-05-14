import { Transformer } from '@/core';
import { TCartLimitsProjection, TCartLimitsProjectionGraphql } from './types';

const transformers = {
  default: Transformer<TCartLimitsProjection, TCartLimitsProjection>(
    'default',
    {
      buildFields: ['total'],
    }
  ),
  rest: Transformer<TCartLimitsProjection, TCartLimitsProjection>('rest', {
    buildFields: ['total'],
  }),
  graphql: Transformer<TCartLimitsProjection, TCartLimitsProjectionGraphql>(
    'graphql',
    {
      buildFields: ['total'],
      addFields: () => ({
        __typename: 'CartLimitsProjection',
      }),
    }
  ),
};

export default transformers;
