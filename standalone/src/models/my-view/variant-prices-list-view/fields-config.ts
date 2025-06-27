import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TVariantPricesListViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TVariantPricesListViewGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      projectKey: fake((f) => f.lorem.slug(2)),
      updatedAt: fake(getNewerDate),
      userId: fake((f) => f.string.uuid()),
      visibleColumns: [],
      __typename: 'VariantPricesListView',
    },
  };
