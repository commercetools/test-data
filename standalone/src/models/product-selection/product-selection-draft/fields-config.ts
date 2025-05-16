import { fake, TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import { productSelectionMode } from '../constants';
import {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionDraftRest> =
  {
    fields: {
      name: fake(() => LocalizedString.random()),
      key: fake((f) => f.lorem.slug()),
      custom: null,
      mode: productSelectionMode.Individual,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductSelectionDraftGraphql> =
  {
    fields: {
      name: fake((f) => LocalizedString.random()),
      key: fake((f) => f.lorem.slug()),
      custom: null,
      mode: productSelectionMode.Individual,
    },
  };
