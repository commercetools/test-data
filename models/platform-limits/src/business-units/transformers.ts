import { Transformer } from '@commercetools-test-data/core';
import {
  TBusinessUnitLimitsProjection,
  TBusinessUnitLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TBusinessUnitLimitsProjection,
    TBusinessUnitLimitsProjection
  >('default', {
    buildFields: [
      'maxDivisions',
      'maxDepthLimit',
      'maxAssociates',
      'maxAssociateRoles',
    ],
  }),
  rest: Transformer<
    TBusinessUnitLimitsProjection,
    TBusinessUnitLimitsProjection
  >('rest', {
    buildFields: [
      'maxDivisions',
      'maxDepthLimit',
      'maxAssociates',
      'maxAssociateRoles',
    ],
  }),
  graphql: Transformer<
    TBusinessUnitLimitsProjection,
    TBusinessUnitLimitsProjectionGraphql
  >('graphql', {
    buildFields: [
      'maxDivisions',
      'maxDepthLimit',
      'maxAssociates',
      'maxAssociateRoles',
    ],
    addFields: () => ({
      __typename: 'BusinessUnitLimitsProjection',
    }),
  }),
};

export default transformers;
