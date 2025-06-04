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
    // postBuild: (model, context) => {
    //   // This is because of the compatibility mode, where the we have different
    //   // properties for the attributeDefinitions between the REST and GraphQL models.
    //   // @ts-expect-error - "attributes" exists in the REST model, which we use in the compatibility builder.
    //   if (context?.isCompatMode && model.attributes) {
    //     const attributeDefinitions =
    //       // @ts-expect-error - "attributes" exists in the REST model, which we use in the compatibility builder.
    //       model.attributes as unknown as TAttributeDefinitionGraphql[];
    //     return {
    //       attributeDefinitions: {
    //         results: attributeDefinitions,
    //         name: 'attributeDefinitions',
    //         total: attributeDefinitions.length,
    //         offset: 0,
    //         __typename: 'AttributeDefinitionResult',
    //       },
    //     };
    //   }

    //   return model;
    // },
  };
