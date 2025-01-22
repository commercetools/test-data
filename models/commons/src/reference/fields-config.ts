import { type TModelFieldsConfig, fake } from '@commercetools-test-data/core';
import type { TReferenceGraphql, TReferenceRest } from './types';

const commonFieldsConfig = {
  fields: {
    id: fake((f) => f.string.uuid()),
    typeId: null,
  },
};

export const restFieldsConfig: TModelFieldsConfig<TReferenceRest> = {
  fields: {
    ...commonFieldsConfig.fields,
    obj: null,
  },
  postBuild(model) {
    return {
      ...model,
      obj: model.obj || { id: model.id },
    };
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TReferenceGraphql> = {
  fields: {
    ...commonFieldsConfig.fields,
    __typename: 'Reference',
  },
};
