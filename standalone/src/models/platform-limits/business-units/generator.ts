import { Generator } from '@/core';
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
