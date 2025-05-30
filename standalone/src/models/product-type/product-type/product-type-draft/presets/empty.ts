import { TBuilder } from '@/core';
import {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

export const restPreset = (): TBuilder<TProductTypeDraftRest> =>
  RestModelBuilder().key(undefined).attributes(undefined);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  GraphqlModelBuilder().key(undefined).attributeDefinitions(undefined);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  CompatModelBuilder()
    .key(undefined)
    .attributes(undefined)
    // @ts-expect-error - "attributesDefinition" exists in the Graphql model, which we use in the compatibility builder.
    .attributeDefinitions(undefined);
