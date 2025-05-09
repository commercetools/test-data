import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const doubleWalledEspressoGlassProductTypeDraft =
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

const doubleWalledEspressoGlass = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('double-walled-espresso-glass')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Double-walled Espresso Glass')
        ['en-GB']('Double-walled Espresso Glass')
        ['de-DE']('Doppelwandiges Espressotasse aus Glas')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Eine doppelwandige Espressotasse aus Glas ist speziell zum Servieren von Espresso entwickelt worden. Sie besteht aus Glas und ist doppelwandig aufgebaut, was bedeutet, dass es zwei Glasschichten gibt, die durch einen kleinen Spalt getrennt sind.  Das doppelwandige Design der Espressotasse aus Glas bietet mehrere Vorteile. Erstens hilft es, den Espresso zu isolieren, wodurch er länger heiß bleibt. Zweitens sorgt die doppelwandige Konstruktion dafür, dass sich die Außenseite der Tasse kühl anfühlt, wodurch sie auch bei sehr heißem Espresso angenehm in der Hand liegt.  Die Tasse hat ein Fassungsvermögen von etwa 2-3 cl, was die perfekte Größe für einen Schuss Espresso ist. Das Glas ist außerdem transparent, sodass Sie die satte, dunkle Farbe des Espressos sehen können, wenn er eingeschenkt und getrunken wird.  Die doppelwandige Espressotasse aus Glas wird oft mit einer passenden Untertasse kombiniert, die der Tasse einen stabilen Stand bietet und auch Platz für einen kleinen Löffel oder Keks bietet. Insgesamt ist die doppelwandige Espressotasse aus Glas eine stilvolle und funktionale Möglichkeit, die reichen und komplexen Aromen eines Espressos zu genießen.')
        [
          'en-GB'
        ]('A double-walled glass espresso cup is a type of drinking vessel that is specifically designed for serving espresso. It is made of glass and features a double-walled construction, which means that there are two layers of glass that are separated by a small gap.  The double-walled design of the glass espresso cup provides several benefits. First, it helps to insulate the espresso, which keeps it hot for longer periods of time. Second, the double-walled construction keeps the outside of the cup cool to the touch, which makes it comfortable to hold even when the espresso inside is very hot.  The cup is typically small in size, with a capacity of around 2-3 ounces, which is the perfect size for a shot of espresso. The glass is also transparent, which allows you to see the rich, dark color of the espresso as it is poured and consumed.  The double-walled glass espresso cup is often paired with a matching saucer, which provides a stable base for the cup and also provides a place to set a small spoon or biscuit. Overall, the double-walled glass espresso cup is a stylish and functional way to enjoy the rich and complex flavors of a shot of espresso.')
        [
          'en-US'
        ]('A double-walled glass espresso cup is a type of drinking vessel that is specifically designed for serving espresso. It is made of glass and features a double-walled construction, which means that there are two layers of glass that are separated by a small gap.  The double-walled design of the glass espresso cup provides several benefits. First, it helps to insulate the espresso, which keeps it hot for longer periods of time. Second, the double-walled construction keeps the outside of the cup cool to the touch, which makes it comfortable to hold even when the espresso inside is very hot.  The cup is typically small in size, with a capacity of around 2-3 ounces, which is the perfect size for a shot of espresso. The glass is also transparent, which allows you to see the rich, dark color of the espresso as it is poured and consumed.  The double-walled glass espresso cup is often paired with a matching saucer, which provides a stable base for the cup and also provides a place to set a small spoon or biscuit. Overall, the double-walled glass espresso cup is a stylish and functional way to enjoy the rich and complex flavors of a shot of espresso.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('double-walled-espresso-glass')
        ['de-DE']('doppelwandiges-espressoglas')
        ['en-US']('double-walled-espresso-glass')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(doubleWalledEspressoGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.doubleWalledEspressoGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default doubleWalledEspressoGlass;
