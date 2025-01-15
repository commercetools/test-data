import { type TModelFieldsConfig, fake } from '@commercetools-test-data/core';
import type { TReferenceDraftGraphql, TReferenceDraftRest } from '../types';

const commonFieldsConfig = {
  fields: {
    id: fake((f) => f.string.uuid()),
    typeId: null,
  },
};

export const restFieldsConfig: TModelFieldsConfig<TReferenceDraftRest> = {
  fields: {
    ...commonFieldsConfig.fields,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TReferenceDraftGraphql> = {
  fields: {
    ...commonFieldsConfig.fields,
  },
};
