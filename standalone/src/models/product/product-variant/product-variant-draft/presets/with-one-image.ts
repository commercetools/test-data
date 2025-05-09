// import ProductVariantDraft from '../builder';

// function withOneImage() {
//   return ProductVariantDraft().images([Image.presets.commercetoolsPosAem()]);
// }

// export default withOneImage;

import {
  ProductVariantDraft,
  ProductVariantDraftGraphql,
  ProductVariantDraftRest,
} from '..';
import { TBuilder } from '../../../../../core';
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
  return builder.images([Image.presets.commercetoolsPosAem()]);
};

export const restPreset = (): TBuilder<TProductVariantDraftRest> =>
  populatePreset(ProductVariantDraftRest.random());

export const graphqlPreset = (): TBuilder<TProductVariantDraftGraphql> =>
  populatePreset(ProductVariantDraftGraphql.random());

export const compatPreset = (): TBuilder<TProductVariantDraft> =>
  populatePreset(ProductVariantDraft.random());
