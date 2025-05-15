import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedField } from '@/models/commons';
import type { TCustomApplicationMenuLinkDraftGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationMenuLinkDraftGraphql> =
  {
    fields: {
      labelAllLocales: fake(() => [LocalizedField.random()]),
      defaultLabel: fake((f) => f.lorem.word()),
      permissions: [],
    },
  };
