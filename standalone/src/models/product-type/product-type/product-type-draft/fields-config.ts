import { fake, type TModelFieldsConfig } from '@/core';
import {
  AttributeDefinitionDraftGraphql,
  AttributeDefinitionDraftRest,
} from '../../attribute-definition/attribute-definition-draft';
import { TProductTypeDraftGraphql, TProductTypeDraftRest } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#producttypedraft

const commonFieldsConfig = {
  description: fake((f) => f.lorem.words()),
  key: fake((f) => f.lorem.slug()),
  name: fake((f) => f.lorem.words(2)),
};

export const restFieldsConfig: TModelFieldsConfig<TProductTypeDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    attributes: fake(() => [AttributeDefinitionDraftRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTypeDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      attributeDefinitions: fake(() => [
        AttributeDefinitionDraftGraphql.random(),
      ]),
    },
    postBuild: (model, context) => {
      // This is because of the compatibility mode, where the we have different
      // properties for the attributeDefinitions between the REST and GraphQL models.
      if (context?.isCompatMode && 'attributes' in model) {
        const { attributes, ...rest } = model;
        return {
          ...rest,
          attributeDefinitions:
            attributes as TProductTypeDraftGraphql['attributeDefinitions'],
        };
      }

      return model;
    },
  };
