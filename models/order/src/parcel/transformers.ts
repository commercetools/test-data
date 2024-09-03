import { Transformer } from '@commercetools-test-data/core';
import type { TParcel, TParcelGraphql } from './types';

const transformers = {
  default: Transformer<TParcel, TParcel>('default', {
    buildFields: ['items', 'custom', 'measurements', 'trackingData'],
  }),
  rest: Transformer<TParcel, TParcel>('rest', {
    buildFields: ['items', 'custom', 'measurements', 'trackingData'],
  }),
  graphql: Transformer<TParcel, TParcelGraphql>('graphql', {
    buildFields: ['items', 'custom', 'measurements', 'trackingData'],
    addFields: () => ({
      __typename: 'Parcel',
    }),
  }),
};

export default transformers;
