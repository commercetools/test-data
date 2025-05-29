import { buildGraphqlList, fake, type TModelFieldsConfig } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import {
  AttributeDefinitionGraphql,
  AttributeDefinitionRest,
} from '../attribute-definition';
import { TAttributeDefinitionGraphql } from '../attribute-definition/types';
import { TProductTypeGraphql, TProductTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#producttype

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: fake((f) => f.number.int()),
  key: fake((f) => f.lorem.slug()),
  name: fake((f) => f.person.fullName()),
  description: fake((f) => f.lorem.words()),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TProductTypeRest> = {
  fields: {
    ...commonFieldsConfig,
    attributes: fake(() => [AttributeDefinitionRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTypeGraphql> = {
  fields: {
    ...commonFieldsConfig,
    attributeDefinitions: fake(() =>
      buildGraphqlList([AttributeDefinitionGraphql.random()], {
        name: 'attributeDefinitions',
        total: 1,
        offset: 0,
        __typename: 'AttributeDefinitionResult',
      })
    ),
    __typename: 'ProductTypeDefinition',
  },
  postBuild: (model, context) => {
    // This is because of the compatibility mode, where the we have different
    // properties for the attributeDefinitions between the REST and GraphQL models.
    // @ts-expect-error - "attributes" exists in the REST model, which we use in the compatibility builder.
    if (context?.isCompatMode && model.attributes) {
      const attributeDefinitions =
        // @ts-expect-error - "attributes" exists in the REST model, which we use in the compatibility builder.
        model.attributes as unknown as TAttributeDefinitionGraphql[];
      return {
        attributeDefinitions: {
          results: attributeDefinitions,
          name: 'attributeDefinitions',
          total: attributeDefinitions.length,
          offset: 0,
          __typename: 'AttributeDefinitionResult',
        },
      };
    }

    return model;
  },
};
