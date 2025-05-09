import { Generator, fake } from '../../core';
import { createRelatedDates } from '../../utils';
import { LocalizedField } from '../commons';
import { TCustomersSearchListMyView } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// ref https://github.com/commercetools/merchant-center-services/blob/main/packages/settings/lib/schemas/customers-search-list-my-view.graphql
const generator = Generator<TCustomersSearchListMyView>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    userId: fake((f) => f.string.uuid()),
    projectKey: fake((f) => f.lorem.slug(2)),
    nameAllLocales: fake(() => [LocalizedField.random()]),
    isActive: fake(() => true),
    table: null,
    sort: null,
    filters: null,
  },
});

export default generator;
