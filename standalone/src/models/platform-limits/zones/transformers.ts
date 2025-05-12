import { Transformer } from '../../../core';
import { TZoneLimitsProjection, TZoneLimitsProjectionGraphql } from './types';

const transformers = {
  default: Transformer<TZoneLimitsProjection, TZoneLimitsProjection>(
    'default',
    {
      buildFields: ['total'],
    }
  ),
  rest: Transformer<TZoneLimitsProjection, TZoneLimitsProjection>('rest', {
    buildFields: ['total'],
  }),
  graphql: Transformer<TZoneLimitsProjection, TZoneLimitsProjectionGraphql>(
    'graphql',
    {
      buildFields: ['total'],
      addFields: () => ({
        __typename: 'ZoneLimitsProjection',
      }),
    }
  ),
};

export default transformers;
