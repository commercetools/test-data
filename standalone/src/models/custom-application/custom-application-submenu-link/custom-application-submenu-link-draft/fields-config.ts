import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedField } from '@/models/commons';
import type { TCustomApplicationSubmenuLinkDraftGraphql } from '../types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationSubmenuLinkDraftGraphql> =
  {
    fields: {
      uriPath: fake((f) => f.lorem.word()),
      defaultLabel: fake((f) => f.lorem.word()),
      labelAllLocales: fake(() => [LocalizedField.random()]),
      permissions: [],
    },
  };
