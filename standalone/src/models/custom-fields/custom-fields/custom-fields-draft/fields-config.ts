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
      if (model.fields) {
        /**
         * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
         *
         *
         * Examples for `value`:
         *
         * * FieldType `String`: `"\"This is a string\""`
         * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
         * * FieldType `Number`: `"4"`
         * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
         * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
         *
         * To facilitate the consumption of the model, we are stringifying the value in the postBuild.
         */
        return {
          ...model,
          fields: model.fields.map((field) => ({
            ...field,
            value: JSON.stringify(field.value),
          })),
        };
      }
      return model;
    },
  };
