import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { TParcelRest, TParcelGraphql } from './types';

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: null,
  custom: null,
  createdAt: fake(getOlderDate),
  measurements: null,
  trackingData: null,
  items: null,
};

export const restFieldsConfig: TModelFieldsConfig<TParcelRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TParcelGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Parcel',
  },
};
