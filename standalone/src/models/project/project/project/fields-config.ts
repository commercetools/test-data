import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import * as MessagesConfiguration from './messages-configuration';
import type { TProjectRest, TProjectGraphql } from './types';

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  version: sequence(),
  key: fake((f) => f.lorem.slug()),
  name: fake((f) => f.lorem.words()),
  countries: fake(() => ['EN']),
  currencies: fake(() => ['EUR']),
  languages: fake(() => ['en']),
  isProductionProject: fake(() => false),
  initialized: fake(() => true),
  trialUntil: null,
  businessUnits: null,
  searchIndexing: null,
  carts: null,
  messages: fake(() => MessagesConfiguration.random()),
  externalOAuth: null,
  shippingRateInputType: null,
  shoppingLists: null,
};

export const restFieldsConfig: TModelFieldsConfig<TProjectRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProjectGraphql> = {
  fields: {
    ...commonFieldsConfig,
    createdBy: null,
    lastModifiedAt: fake(getOlderDate),
    lastModifiedBy: null,
    billingInfo: null,
    customLimits: null,
    cdnContainerConfiguration: {
      __typename: 'CdnContainerConfiguration',
      enabled: false,
    },
    cdnContainer: null,
    inventory: null,
    owner: null,
    ownerRef: null,
    participations: [],
    participationsRef: [],
    plan: 'Standard',
    suspended: null,
    __typename: 'Project',
  },
};
