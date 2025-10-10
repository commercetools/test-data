import { fake, sequence, TModelFieldsConfig } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { LocationGraphql, LocationRest } from '../location';
import { TZoneGraphql, TZoneRest } from './types';

// Reference: https://docs.commercetools.com/api/projects/zones#zone

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  description: null,
  id: fake((f) => f.string.uuid()),
  key: null,
  name: fake((f) => f.lorem.words(2)),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  version: sequence(),
};

export const restFieldsConfig: TModelFieldsConfig<TZoneRest> = {
  fields: {
    ...commonFieldsConfig,
    locations: fake(() => [LocationRest.random(), LocationRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TZoneGraphql> = {
  fields: {
    ...commonFieldsConfig,
    locations: fake(() => [LocationGraphql.random(), LocationGraphql.random()]),
    __typename: 'Zone',
  },
};
