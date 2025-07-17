import { buildLimitGraphqlList, type TBuilder } from '@/core';
import {
  AttributeDefinitionRest,
  AttributeDefinitionGraphql,
  AttributeDefinition,
  TAttributeDefinitionGraphql,
} from '../..';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import type {
  TProductType,
  TProductTypeGraphql,
  TProductTypeRest,
} from '../types';

export const restPreset = (): TBuilder<TProductTypeRest> =>
  RestModelBuilder()
    .name('T-shirt Product Type')
    .attributes([
      AttributeDefinitionRest.presets.countryOfOrigin().build(),
      AttributeDefinitionRest.presets.size().build(),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeGraphql> =>
  GraphqlModelBuilder()
    .name('T-shirt Product Type')
    .attributeDefinitions(
      buildLimitGraphqlList<
        TAttributeDefinitionGraphql,
        'AttributeDefinitionResult'
      >(
        [
          AttributeDefinitionGraphql.presets.countryOfOrigin(),
          AttributeDefinitionGraphql.presets.size(),
        ],
        {
          __typename: 'AttributeDefinitionResult',
        }
      )
    );

export const compatPreset = (): TBuilder<TProductType> =>
  CompatModelBuilder()
    .name('T-shirt Product Type')
    .attributes([
      AttributeDefinition.presets.countryOfOrigin().buildRest(),
      AttributeDefinition.presets.size().buildRest(),
    ]);
