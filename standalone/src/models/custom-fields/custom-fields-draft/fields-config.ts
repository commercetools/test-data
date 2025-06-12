import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceDraftRest, ReferenceDraftGraphql } from '@/models/commons';
import { TCustomFieldsDraftRest, TCustomFieldsDraftGraphql } from '../types';

export const restFieldsConfig: TModelFieldsConfig<TCustomFieldsDraftRest> = {
  fields: {
    type: fake(() => ReferenceDraftRest.presets.typeReference()),
    fields: {},
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomFieldsDraftGraphql> =
  {
    fields: {
      fields: null,
      type: fake(() => ReferenceDraftGraphql.presets.typeReference()),
      typeId: null,
      typeKey: null,
    },
    postBuild: (model) => {
      const fields = model.fields?.map((field) => ({
        name: field.name,
        // Unlike the HTTP API, the GraphQL API only accepts strings for `value`.
        value: JSON.stringify(field.value),
      }));

      return {
        fields,
      };
    },
  };
