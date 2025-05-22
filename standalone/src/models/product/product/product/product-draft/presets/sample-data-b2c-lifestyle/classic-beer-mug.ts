import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const classicBeerMugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const classicBeerMug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('classic-beer-mug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Classic Beer Mug')
        ['en-GB']('Classic Beer Mug')
        ['de-DE']('Klassisches Bierglas')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.")
        [
          'en-US'
        ]("This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.")
        [
          'de-DE'
        ]('Dieser klassische Bierkrug hat einen robusten Griff, der das Halten erleichtert und verhindert, dass die Hand des Trinkers das Bier erwärmt. Als Material wird hochwertiges Glas eingesetzt. Durch dieses Design kann das Bier seinen vollen Geschmack und sein volles Aroma entfalten. Die robusten Wände des Krugs bilden eine Art Isolationsschicht und halten somit länger das Bier länger kalt.  Der Becher fasst normalerweise zwischen 12 und 20 Unzen Bier. Der Becher ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('classic-beer-mug')
        ['en-GB']('classic-beer-mug')
        ['de-DE']('klassischer-bierkrug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(classicBeerMugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.classicBeerMug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default classicBeerMug;
