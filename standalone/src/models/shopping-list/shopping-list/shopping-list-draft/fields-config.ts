import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import { TShoppingListDraftGraphql, TShoppingListDraftRest } from '../types';

const commonFieldsConfig = {
  anonymousId: null,
  businessUnit: null,
  custom: null,
  customer: null,
  deleteDaysAfterLastModification: null,
  description: null,
  key: null,
  lineItems: null,
  name: fake(() => LocalizedStringDraft.random()),
  slug: null,
  store: null,
  textLineItems: null,
};
export const restFieldsConfig: TModelFieldsConfig<TShoppingListDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShoppingListDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
