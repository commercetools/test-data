import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TQuotesListViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TQuotesListViewGraphql> = {
  fields: {
    createdAt: fake(getOlderDate),
    id: fake((f) => f.string.uuid()),
    isActive: null,
    nameAllLocales: null,
    projectKey: fake((f) => f.lorem.slug(2)),
    search: null,
    sort: null,
    sortQuoteRequests: null,
    sortQuotes: null,
    sortStagedQuotes: null,
    updatedAt: fake(getNewerDate),
    userId: fake((f) => f.string.uuid()),
    __typename: 'QuotesListView',
  },
};
