import { type TBuilder } from '@/core';
import {
  AttributeDefinitionRest,
  AttributeDefinitionGraphql,
  AttributeDefinition,
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
      AttributeDefinitionRest.presets.countryOfOrigin().buildRest(),
      AttributeDefinitionRest.presets.size().buildRest(),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeGraphql> =>
  GraphqlModelBuilder()
    .name('T-shirt Product Type')
    .attributeDefinitions({
      results: [
        AttributeDefinitionGraphql.presets.countryOfOrigin().buildGraphql(),
        AttributeDefinitionGraphql.presets.size().buildGraphql(),
      ],
      total: 1,
      offset: 0,
      __typename: 'AttributeDefinitionResult',
    });

export const compatPreset = (): TBuilder<TProductType> =>
  CompatModelBuilder()
    .name('T-shirt Product Type')
    .attributes([
      AttributeDefinition.presets.countryOfOrigin().buildRest(),
      AttributeDefinition.presets.size().buildRest(),
    ]);
