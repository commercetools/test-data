import { fake, TModelFieldsConfig } from '../../../core';
import {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionDraftRest> =
  {
    fields: {
      name: fake((f) => f.lorem.word()),
      key: fake((f) => f.lorem.slug()),
      custom: null,
      mode: 'Individual',
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductSelectionDraftGraphql> =
  {
    fields: {
      name: fake((f) => f.lorem.word()),
      key: fake((f) => f.lorem.slug()),
      custom: null,
      mode: 'Individual',
    },
  };
