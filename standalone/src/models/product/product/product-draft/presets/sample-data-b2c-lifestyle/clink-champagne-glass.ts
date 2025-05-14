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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const clinkChampagneGlassProductTypeDraft =
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

const clinkChampagneGlass = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('clink-champagne-glass')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Clink Champagne Glass')
        ['en-GB']('Clink Champagne Glass')
        ['de-DE']('Sektgläser zum Anstoßen')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.")
        [
          'en-US'
        ]("A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.")
        [
          'de-DE'
        ]('Ein konisches Champagnerglas, auch als Champagnerflöte bekannt, ist ein Glas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Das Glas hat einen hohen, schmalen Kelch, der sich nach oben hin verjüngt - schauen Sie zu wie sich die Bläschen in Ihrem Glas tanzen. Der hohe, schlanke Stiel des Glases verhindert das Aufwärmen des Getränks durch Körperwärme. Die Basis des Glases ist breit und flach und sorgt für Stabilität und Balance.  Das Design des konisch zulaufenden Sektglases soll das Aroma und den Geschmack des Getränks verstärken. Der schmale Kelch konzentriert die Bläschen und das Aroma des Champagner. Dadurch können Sie den Geschmack des Champagners voll und ganz genießen.  Das konische Sektglas wird typischerweise zum Servieren von Sekt oder anderen Schaumweinen verwendet, kann aber auch für andere kohlensäurehaltige Getränke oder Cocktails verwendet werden. Es ist leicht zu reinigen und zu pflegen und kann von Hand oder in der Spülmaschine gewaschen werden.  Insgesamt ist das konische Champagnerglas ein stilvolles und elegantes Stielglas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Sein einzigartiges Design und die Liebe zum Detail machen es zu einer beliebten Wahl für besondere Anlässe und Feiern.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('clink-champagne-glass')
        ['en-GB']('clink-champagne-glass')
        ['de-DE']('sektglas-anstoen')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(clinkChampagneGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.clinkChampagneGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default clinkChampagneGlass;
