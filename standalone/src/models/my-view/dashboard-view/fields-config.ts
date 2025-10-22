import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TDashboardViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// There's not REST config as this entity only exists in the MC Settings GraphQL API

export const graphqlFieldsConfig: TModelFieldsConfig<TDashboardViewGraphql> = {
  fields: {
    createdAt: fake(getOlderDate),
    currencyCode: null,
    id: fake((f) => f.string.uuid()),
    isActive: fake(() => true),
    layout: null,
    nameAllLocales: [],
    projectKey: fake((f) => f.lorem.slug(2)),
    timeZone: null,
    updatedAt: fake(getNewerDate),
    userId: fake((f) => f.string.uuid()),
    __typename: 'DashboardView',
  },
};
