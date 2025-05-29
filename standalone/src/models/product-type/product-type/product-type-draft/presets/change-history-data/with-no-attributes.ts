// import ProductTypeDraft from '../../builders';

// const withNoAttributes = () => ProductTypeDraft().attributes(undefined);

// export default withNoAttributes;

import { TBuilder } from '@/core';
import {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

export const restPreset = (): TBuilder<TProductTypeDraftRest> =>
  RestModelBuilder().attributes(undefined);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  GraphqlModelBuilder().attributeDefinitions(undefined);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  CompatModelBuilder()
    .attributes(undefined)
    // @ts-expect-error - "attributesDefinition" exists in the Graphql model, which we use in the compatibility builder.
    .attributeDefinitions(undefined);
