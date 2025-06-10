import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TPimSearchListViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// id: ID!
// createdAt: DateTime!
// updatedAt: DateTime!
// userId: String!
// projectKey: String!
// nameAllLocales: [LocalizedField!]
// isActive: Boolean
// search: String
// table: Table
// sort: Sort
// filters: [FilterValues!]
// expandedRows: [String!]!

export const graphqlFieldsConfig: TModelFieldsConfig<TPimSearchListViewGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      userId: fake((f) => f.string.uuid()),
      projectKey: fake((f) => f.lorem.slug(2)),
      nameAllLocales: fake(() => LocalizedString.random()),
      isActive: fake(() => true),
      search: null,
      table: null,
      sort: null,
      filters: [],
      expandedRows: [],
      __typename: 'PimSearchListView',
    },
  };
