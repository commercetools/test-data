import { fake, TModelFieldsConfig } from '@/core';
import {
  AttributeBooleanTypeDraftGraphql,
  AttributeBooleanTypeDraftRest,
} from '../../attribute-boolean-type/attribute-boolean-type-draft';
import {
  TAttributeSetTypeDraftGraphql,
  TAttributeSetTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

export const restFieldsConfig: TModelFieldsConfig<TAttributeSetTypeDraftRest> =
  {
    fields: {
      name: 'set',
      elementType: fake(() => AttributeBooleanTypeDraftRest.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeSetTypeDraftGraphql> =
  {
    fields: {
      elementType: fake(() => AttributeBooleanTypeDraftGraphql.random()),
    },
    postBuild: (model) => {
      // The way the types are modeled in the GraphQL makes it difficult to actually define
      // the `elementType` field of this model.
      // We need to inspect the value of the `elementType` field in order to transform it into the expected format.
      // That's why we have to ignore the typescript warnings.
      // @ts-expect-error AttributeEnumTypeDraftGraphql and AttributeLocalizedEnumTypeDraftGraphql types have a `name` field
      if (model.elementType.name) {
        // @ts-expect-error AttributeEnumTypeDraftGraphql and AttributeLocalizedEnumTypeDraftGraphql types have a `name` field
        const { name, ...rest } = model.elementType;
        return {
          elementType: {
            [name]: rest,
          },
        };
      }
      // @ts-expect-error AttributeReferenceTypeDraftGraphql type has a `referenceTypeId` field
      if (model.elementType.referenceTypeId) {
        return {
          elementType: {
            reference: {
              // @ts-expect-error AttributeReferenceTypeDraftGraphql type has a `referenceTypeId` field
              referenceTypeId: model.elementType.referenceTypeId,
            },
          },
        };
      }
      // @ts-expect-error Simple attribute types have `dummy` field
      if (model.elementType.dummy) {
        return {
          elementType: {
            // @ts-expect-error Simple attribute types have `dummy` field
            [model.elementType.dummy]: {
              dummy: null,
            },
          },
        };
      }
      return model;
    },
  };
