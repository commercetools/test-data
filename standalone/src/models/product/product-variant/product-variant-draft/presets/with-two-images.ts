// import ProductVariantDraft from '../builder';

// function withTwoImages() {
//   return ProductVariantDraft().images([
//     Image.presets.commercetoolsPosAem(),
//     Image.presets.commercetoolsApiPlatform(),
//   ]);
// }

// export default withTwoImages;

import { TBuilder } from '@/core';
import {
  ProductVariantDraft,
  ProductVariantDraftGraphql,
  ProductVariantDraftRest,
} from '..';
import { Image } from '../../../index';
import {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../../types';

const populatePreset = <
  TModel extends TProductVariantDraftGraphql | TProductVariantDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.images([
    Image.presets.commercetoolsPosAem(),
    Image.presets.commercetoolsApiPlatform(),
  ]);
};

export const restPreset = (): TBuilder<TProductVariantDraftRest> =>
  populatePreset(ProductVariantDraftRest.random());

export const graphqlPreset = (): TBuilder<TProductVariantDraftGraphql> =>
  populatePreset(ProductVariantDraftGraphql.random());

export const compatPreset = (): TBuilder<TProductVariantDraft> =>
  populatePreset(ProductVariantDraft.random());
