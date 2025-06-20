import { fake, type TModelFieldsConfig } from '@/core';
import { TTrackingDataRest, TTrackingDataGraphql } from './types';

const commonFieldsConfig = {
  trackingId: fake((f) => f.lorem.words()),
  carrier: fake((f) => f.lorem.words()),
  provider: fake((f) => f.lorem.words()),
  providerTransaction: fake((f) => f.lorem.words()),
  isReturn: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TTrackingDataRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTrackingDataGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'TrackingData',
  },
};
