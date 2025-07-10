import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import type {
  TDiscountGroupDraftGraphql,
  TDiscountGroupDraftRest,
} from '../types';

const commonFieldsConfig = {
  name: fake(() => LocalizedStringDraft.random()),
  description: fake(() => LocalizedStringDraft.random()),
  key: fake((f) => f.string.alphanumeric({ length: { min: 2, max: 256 } })),
  sortOrder: fake((f) =>
    String(f.number.float({ min: 0.00000001, max: 0.99999999 }))
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountGroupDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountGroupDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
