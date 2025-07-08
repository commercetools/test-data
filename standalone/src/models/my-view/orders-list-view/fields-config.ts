import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TOrdersListViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TOrdersListViewGraphql> = {
  fields: {
    createdAt: fake(getOlderDate),
    filters: [],
    id: fake((f) => f.string.uuid()),
    isActive: fake(() => true),
    nameAllLocales: null,
    projectKey: fake((f) => f.lorem.slug(2)),
    search: null,
    searchParams: null,
    sort: null,
    table: null,
    updatedAt: fake(getNewerDate),
    userId: fake((f) => f.string.uuid()),
    __typename: 'OrdersListView',
  },
};
