import { LocalizedString } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TCustomersSearchListMyView } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// ref https://github.com/commercetools/merchant-center-services/blob/main/packages/settings/lib/schemas/customers-search-list-my-view.graphql
const generator = Generator<TCustomersSearchListMyView>({
  fields: {
    /**
     * id: ID!
     */
    id: fake((f) => f.string.uuid()),
    /**
     * createdAt: DateTime!
     */
    createdAt: fake(getOlderDate),
    /**
     * updatedAt: DateTime!
     */
    updatedAt: fake(getNewerDate),
    /**
     * userId: String!
     */
    userId: fake((f) => f.string.uuid()),
    /**
     * projectKey: String!
     */
    projectKey: fake((f) => f.lorem.slug(2)),
    /**
     * nameAllLocales [LocalizedField!]
     */
    nameAllLocales: null,
    name: fake(() => LocalizedString.random()),
    /**
     * isActive: Boolean!
     */
    isActive: fake(() => true),
    /**
     * table: Table
     * { visibleColumns: [] }
     */
    table: null,
    /**
     * sort: Sort
     * { order: String, key: String  }
     */
    sort: null,
    /**
     * filters: [FilterValues!]!
     */
    filters: null,
  },
});

export default generator;
