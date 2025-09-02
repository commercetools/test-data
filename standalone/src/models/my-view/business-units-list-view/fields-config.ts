import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TBusinessUnitsListMyViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TBusinessUnitsListMyViewGraphql> =
  {
    fields: {
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      userId: fake((f) => f.string.uuid()),
      projectKey: fake((f) => f.lorem.slug(2)),
      nameAllLocales: null,
      isActive: fake(() => true),
      table: null,
      sort: null,
      filters: [],
      id: fake((f) => f.string.uuid()),
      __typename: 'BusinessUnitsListMyView',
    },
  };
