import { Generator } from '@commercetools-test-data/core';
import { TBusinessUnitLimitsProjection } from './types';

const generator = Generator<TBusinessUnitLimitsProjection>({
  fields: {
    maxDivisions: null,
    maxDepthLimit: null,
    maxAssociates: null,
    maxAssociateRoles: null,
  },
});

export default generator;
