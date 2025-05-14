import { Transformer } from '@/core';
import type { TZone, TZoneGraphql } from './types';

const transformers = {
  default: Transformer<TZone, TZone>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TZone, TZone>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TZone, TZoneGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'Zone',
    }),
  }),
};

export default transformers;
