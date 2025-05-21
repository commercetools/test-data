import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const wineBottleOpenerProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const wineBottleOpener = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('wine-bottle-opener')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Wine Bottle Opener')
        ['en-GB']('Wine Bottle Opener')
        ['de-DE']('Korkenzieher')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.')
        [
          'de-DE'
        ]('Mit diesem praktischen Korkenzieher wird das Öffnen von Weinflaschen zur leichten Übung. Der Korkenzieher hat eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gehoben wird. Ein weiteres Feature des Korkenziehers im Hebelstil ist ein Flaschenöffner.')
        [
          'en-GB'
        ]('A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('wine-bottle-opener')
        ['en-GB']('wine-bottle-opener')
        ['de-DE']('wein-flaschenffner')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(wineBottleOpenerProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.wineBottleOpener01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default wineBottleOpener;
