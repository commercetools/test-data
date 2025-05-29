import { TBuilder } from '@/core';
import {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import {
  ProductTypeDraft,
  ProductTypeDraftGraphql,
  ProductTypeDraftRest,
} from '../../index';

export const restPreset = (): TBuilder<TProductTypeDraftRest> =>
  ProductTypeDraftRest.presets
    .empty()
    .key('generic-product')
    .name('Generic Product')
    .description('Products without specific attributes')
    .attributes([]);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('generic-product')
    .name('Generic Product')
    .description('Products without specific attributes')
    .attributeDefinitions([]);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  ProductTypeDraft.presets
    .empty()
    .key('generic-product')
    .name('Generic Product')
    .description('Products without specific attributes')
    .attributes([])
    // @ts-expect-error - "attributesDefinition" exists in the Graphql model, which we use in the compatibility builder.
    .attributeDefinitions([]);
