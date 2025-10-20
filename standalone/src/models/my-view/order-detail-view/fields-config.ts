import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TOrderDetailViewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export const graphqlFieldsConfig: TModelFieldsConfig<TOrderDetailViewGraphql> =
  {
    fields: {
      createdAt: fake(getOlderDate),
      id: fake((f) => f.string.uuid()),
      isActive: fake(() => true),
      nameAllLocales: [],
      projectKey: fake((f) => f.lorem.slug(2)),
      table: null,
      updatedAt: fake(getNewerDate),
      userId: fake((f) => f.string.uuid()),
      __typename: 'OrderDetailView',
    },
  };
