import { Transformer } from '@/core';
import {
  TTaxCategoryLimitsProjection,
  TTaxCategoryLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TTaxCategoryLimitsProjection,
    TTaxCategoryLimitsProjection
  >('default', {
    buildFields: ['total'],
  }),
  rest: Transformer<TTaxCategoryLimitsProjection, TTaxCategoryLimitsProjection>(
    'rest',
    {
      buildFields: ['total'],
    }
  ),
  graphql: Transformer<
    TTaxCategoryLimitsProjection,
    TTaxCategoryLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['total'],
    addFields: () => ({
      __typename: 'TaxCategoryLimitsProjection',
    }),
  }),
};

export default transformers;
