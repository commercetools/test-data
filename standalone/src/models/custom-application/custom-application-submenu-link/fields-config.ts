import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedField } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TCustomApplicationSubmenuLinkGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationSubmenuLinkGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      uriPath: fake((f) => f.lorem.word()),
      defaultLabel: fake((f) => f.lorem.word()),
      labelAllLocales: fake(() => [LocalizedField.random()]),
      permissions: [],
      __typename: 'CustomApplicationSubmenuLink',
    },
  };
