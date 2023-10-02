import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const wineBottleOpenerProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const wineBottleOpener = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('wine-bottle-opener')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Wine Bottle Opener')
        ['en-GB']('Wine Bottle Opener')
        ['de-DE']('Korkenzieher')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.'
        )
        ['de-DE'](
          'Mit diesem praktischen Korkenzieher wird das Öffnen von Weinflaschen zur leichten Übung. Der Korkenzieher hat eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gehoben wird. Ein weiteres Feature des Korkenziehers im Hebelstil ist ein Flaschenöffner.'
        )
        ['en-GB'](
          'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('wine-bottle-opener')
        ['en-GB']('wine-bottle-opener')
        ['de-DE']('wein-flaschenffner')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(wineBottleOpenerProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.wineBottleOpener01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default wineBottleOpener;
