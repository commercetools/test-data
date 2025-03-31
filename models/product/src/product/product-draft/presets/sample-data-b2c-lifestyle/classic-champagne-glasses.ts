import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const classicChampagneGlassesProductTypeDraft =
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

const classicChampagneGlasses = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('classic-champagne-glasses')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Classic Champagne Glasses')
        ['en-GB']('Classic Champagne Glasses')
        ['de-DE']('Klassische Champagnergläser')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.")
        [
          'en-US'
        ]("Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.")
        [
          'de-DE'
        ]('Klassische Champagnerflöten sind hohe und schlanke Stielgläser, die speziell zum Servieren von Champagner oder anderen Schaumweinen entwickelt wurden. Sie haben einen schmalen und länglichen Kelch, der sich nach oben hin verjüngt, wodurch die Kohlensäure und das Aroma des Weins erhalten bleiben.  Der Stiel ist lang und dünn und verhindert das Erwärmen des Champagners durch Körperwärme. Dies ist wichtig, da Champagner und andere Schaumweine normalerweise gekühlt serviert werden und ihre Spritzigkeit verlieren können, wenn sie zu warm werden.  Die Basis des Glases ist breit und robust, was dem Glas Stabilität und Gleichgewicht verleiht. Das klassische Design der Champagnerflöte ist elegant und zeitlos, was sie zu einer beliebten Wahl für formelle Anlässe und Feiern macht.  Die Gläser sind aus hochwertigem Kristall oder Glas gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht. Einige Champagnerflöten können auch dekorative Ätzungen oder Muster auf dem Kelch oder Stiel aufweisen, was dem Design einen zusätzlichen Hauch von Eleganz verleiht.  Insgesamt sind klassische Champagnerflöten eine stilvolle und elegante Art, Champagner und andere Schaumweine zu servieren. Ihr einzigartiges Design und hochwertige Materialien machen sie zu einer beliebten Wahl für besondere Anlässe wie Hochzeiten, Jubiläen oder Silvesterfeiern.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('classic-champagne-glasses')
        ['en-GB']('classic-champagne-glasses')
        ['de-DE']('klassische-champagnerglser')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(classicChampagneGlassesProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.classicChampagneGlasses01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default classicChampagneGlasses;
