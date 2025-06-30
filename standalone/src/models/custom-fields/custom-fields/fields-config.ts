import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceRest, ReferenceGraphql } from '@/models/commons';
import { Type } from '@/models/type';
import { TCustomFieldsRest, TCustomFieldsGraphql } from './types';

export const restFieldsConfig: TModelFieldsConfig<TCustomFieldsRest> = {
  fields: {
    type: fake(() => ReferenceRest.presets.typeReference()),
    // This is a field container, which is a simple object with string keys and values of any type.
    fields: {},
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomFieldsGraphql> = {
  fields: {
    __typename: 'CustomFieldsType',
    typeRef: null,
    customFieldsRaw: null,
    type: fake(() => Type.random()),
  },
  postBuild: (model) => {
    const typeRef = model.type
      ? ReferenceGraphql.presets
          .typeReference()
          .id(model.type.id)
          .buildGraphql()
      : ReferenceGraphql.presets.typeReference().buildGraphql();

    return {
      ...model,
      typeRef,
    };
  },
};
