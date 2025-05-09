import { TBuilder } from '../../../core';
import { LocalizedString, Reference } from '../../commons';
import { ProductVariant } from '../../product';
import { ProductType } from '../../product-type';
import { RestModelBuilder, GraphqlModelBuilder } from '../builders';
import { TProductProjectionGraphql, TProductProjectionRest } from '../types';

const productName = LocalizedString.presets
  .empty()
  .en('Happy Cow Milk')
  .de('Fröhliche Kuhmilch');

const productDescription = LocalizedString.presets
  .empty()
  .en('Very happy milk produced by very happy cow!')
  .de('Sehr glückliche Milch von sehr glücklicher Kuh!');

const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

const populatePreset = <
  TModel extends TProductProjectionGraphql | TProductProjectionRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('happy-cow-milk-key')
    .masterVariant(ProductVariant.presets.happyCowMilkMasterVariant())
    .published(true)
    .hasStagedChanges(false);
};

export const restPreset = (): TBuilder<TProductProjectionRest> => {
  return populatePreset(RestModelBuilder())
    .slug(slug)
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .productType(
      Reference.presets.productTypeReference().obj(ProductType.presets.milk())
    );
};

export const graphqlPreset = (): TBuilder<TProductProjectionGraphql> => {
  return populatePreset(GraphqlModelBuilder())
    .slugAllLocales(slug)
    .nameAllLocales(productName)
    .descriptionAllLocales(productDescription)
    .metaTitleAllLocales(productName)
    .metaDescriptionAllLocales(productDescription)
    .productType(ProductType.presets.milk());
};
