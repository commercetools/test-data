import { fake, type TModelFieldsConfig } from '@/core';
import { TCtpRawCustomField } from '@/graphql-types';
import { ReferenceRest, ReferenceGraphql } from '@/models/commons';
import { Type } from '@/models/type';
import { TCustomFieldsRest, TCustomFieldsGraphql } from './types';

export const restFieldsConfig: TModelFieldsConfig<TCustomFieldsRest> = {
  fields: {
    type: fake(() => ReferenceRest.presets.typeReference()),
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

    const customFieldsRaw = model.customFieldsRaw?.map((field) => ({
      __typename: 'RawCustomField',
      name: field.name,
      value: field.value,
    })) as TCtpRawCustomField[];

    return {
      customFieldsRaw,
      typeRef,
    };
  },
};
