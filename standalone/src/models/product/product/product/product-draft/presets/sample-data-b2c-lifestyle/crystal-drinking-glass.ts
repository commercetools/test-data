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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const crystalDrinkingGlassProductTypeDraft =
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

const crystalDrinkingGlass = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('crystal-drinking-glass')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Crystal Drinking Glass')
        ['en-GB']('Crystal Drinking Glass')
        ['de-DE']('Kristall-Glas')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.')
        [
          'en-US'
        ]('This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.')
        [
          'de-DE'
        ]('Dieses Kristall-Glas besteht aus hochwertigem, bleifreiem Kristallglas, das dünn und zart, aber dennoch stark und langlebig ist. Das hochwertige Kristallmaterial wertet das Trinkerlebnis auf und lässt die Getränke funkelnder und farbenfroher erscheinen. Das Glas ist zudem so designed, dass es auch das Aroma und den Geschmack des Getränks verbessert. Das Design des Glases soll die Zugabe von Eis, Soda oder anderen Mixern ermöglichen und dennoch viel Platz für das Getränk selbst lassen. Die weite Öffnung des Glases lässt das Aroma des Getränkes aufsteigen, während die geraden Seiten und die glatte Oberfläche das Trinken und Genießen erleichtern.  Dieses Kristall-Glas ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist dieses Glas aus Kristall ein stilvolles und elegantes Glasgeschirr, das sich perfekt zum Servieren von großen Mixgetränken eignet. Sein zartes Kristallmaterial und sein kompliziertes Design machen es zu einer beliebten Wahl für besondere Anlässe und gehobene Speiseerlebnisse.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('crystal-drinking-glass')
        ['de-DE']('kristall-trinkglas')
        ['en-US']('crystal-drinking-glass')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(crystalDrinkingGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.crystalDrinkingGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default crystalDrinkingGlass;
