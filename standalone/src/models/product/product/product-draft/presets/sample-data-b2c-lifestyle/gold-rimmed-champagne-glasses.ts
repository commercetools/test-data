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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const goldRimmedChampagneGlassesProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .glassware()
  .build<TCategoryDraft>();

const goldRimmedChampagneGlasses = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('gold-rimmed-champagne-glasses')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Gold Rimmed Champagne Glasses')
        ['en-GB']('Gold Rimmed Champagne Glasses')
        ['de-DE']('Champagnergläser mit Goldrand')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.")
        [
          'en-US'
        ]("A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.")
        [
          'de-DE'
        ]('Mit einem Set aus Champagner-Kristallgläsern mit Goldrand lässt sich auf luxuriöse und elegante Art Champagner oder Sekt servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.  Die Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Die goldene Umrandung ist ein Detail, das dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und den Gläsern damit ein glamouröses und opulentes Aussehen verleiht. Insgesamt ist das Set aus Champagner-Kristallgläsern mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Das elegante und zeitlose Design, kombiniert mit hochwertigen Materialien und aufwendigen Details, macht es zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('gold-rimmed-champagne-glasses')
        ['en-GB']('gold-rimmed-champagne-glasses')
        ['de-DE']('champagnerglser-mit-goldrand')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(goldRimmedChampagneGlassesProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.goldRimmedChampagneGlasses01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
    ]);

export default goldRimmedChampagneGlasses;
