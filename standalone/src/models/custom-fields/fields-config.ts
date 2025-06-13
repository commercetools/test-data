import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceRest, ReferenceGraphql } from '@/models/commons';
import { Type } from '@/models/type';
import { TCustomFieldsRest, TCustomFieldsGraphql } from './types';

export const restFieldsConfig: TModelFieldsConfig<TCustomFieldsRest> = {
  fields: {
    type: fake(() => ReferenceRest.presets.typeReference()),
    // Use an array ofRawCustomFieldGraphql to create the fields.
    fields: null,
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
      : undefined;

    return {
      ...model,
      typeRef,
    };
  },
};
