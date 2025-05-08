import { Transformer } from '../../../core';
import type { TParcel, TParcelGraphql } from './types';

const buildFields: Array<keyof TParcel> = [
  'items',
  'custom',
  'measurements',
  'trackingData',
];

const transformers = {
  default: Transformer<TParcel, TParcel>('default', {
    buildFields,
  }),
  rest: Transformer<TParcel, TParcel>('rest', {
    buildFields,
  }),
  graphql: Transformer<TParcel, TParcelGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'Parcel',
    }),
  }),
};

export default transformers;
