import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedField } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TCustomApplicationMenuLinkGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationMenuLinkGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      labelAllLocales: fake(() => [LocalizedField.random()]),
      defaultLabel: fake((f) => f.lorem.word()),
      permissions: [],
      __typename: 'CustomApplicationMenuLink',
      icon: '<svg><path fill="#000000" /></svg>',
      submenuLinks: [],
      iconName: fake((f) => f.lorem.word()),
    },
  };
