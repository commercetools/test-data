import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ryeWhiskeyGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .glassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const ryeWhiskeyGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rye-whiskey-glass')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Rye Whiskey Glass')
        ['en-GB']('Rye Whiskey Glass')
        ['de-DE']('Rye-Whiskyglas')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.")
        [
          'en-US'
        ]("The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.")
        [
          'de-DE'
        ]('Das Rye-Whiskyglas wurde speziell für den Genuss von Whisky und anderen Spirituosen entwickelt. Es hat eine breite Form mit einer dickglasigen, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Whiskyglases ist auf ein verbessertes Trinkerlebnis abgestimmt, bei dem die Aromen der Geschmack des Whiskys im Mittelpunkt stehen. Die breite Öffnung des Glases ermöglicht es dem Genießer, die Farbe, Klarheit und Textur des Whiskys voll und ganz wahrzunehmen, während der schwere Boden für Stabilität beim Abstellen sorgt.  Insgesamt ist das Rye-Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein schlichtes, aber elegantes Design macht es zu einer beliebten Wahl für Whiskykenner und Gelegenheitsgenießer gleichermaßen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('rye-whiskey-glass')
        ['en-GB']('rye-whiskey-glass')
        ['de-DE']('roggen-whisky-glas')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(ryeWhiskeyGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.ryeWhiskeyGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default ryeWhiskeyGlass;
