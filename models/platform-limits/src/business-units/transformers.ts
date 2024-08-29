import { Transformer } from '@commercetools-test-data/core';
import {
  TBusinessUnitLimitsProjection,
  TBusinessUnitLimitsProjectionGraphql,
} from './types';
const buildFields: (keyof TBusinessUnitLimitsProjection)[] = [
  'maxDivisions',
  'maxDepthLimit',
  'maxAssociates',
  'maxAssociateRoles',
];
const transformers = {
  default: Transformer<
    TBusinessUnitLimitsProjection,
    TBusinessUnitLimitsProjection
  >('default', {
    buildFields,
  }),
  rest: Transformer<
    TBusinessUnitLimitsProjection,
    TBusinessUnitLimitsProjection
  >('rest', {
    buildFields,
  }),
  graphql: Transformer<
    TBusinessUnitLimitsProjection,
    TBusinessUnitLimitsProjectionGraphql
  >('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'BusinessUnitLimitsProjection',
    }),
  }),
};

export default transformers;
