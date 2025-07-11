import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import { TTextLineItemDraftRest, TTextLineItemDraftGraphql } from '../types';

const commonFieldsConfig = {
  addedAt: null,
  custom: null,
  description: null,
  key: null,
  name: fake(() => LocalizedString.random()),
  quantity: fake((f) => f.number.int({ min: 1 })),
};

export const restFieldsConfig: TModelFieldsConfig<TTextLineItemDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTextLineItemDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
