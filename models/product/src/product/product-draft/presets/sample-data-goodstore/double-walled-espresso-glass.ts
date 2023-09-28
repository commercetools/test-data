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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const doubleWalledEspressoGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const doubleWalledEspressoGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('double-walled-espresso-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Double-walled Espresso Glass')
        ['de-DE']('Doppelwandiges Espressoglas')
        ['en-US']('Double-walled Espresso Glass')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A double-walled glass espresso cup is a type of drinking vessel that is specifically designed for serving espresso. It is made of glass and features a double-walled construction, which means that there are two layers of glass that are separated by a small gap.  The double-walled design of the glass espresso cup provides several benefits. First, it helps to insulate the espresso, which keeps it hot for longer periods of time. Second, the double-walled construction keeps the outside of the cup cool to the touch, which makes it comfortable to hold even when the espresso inside is very hot.  The cup is typically small in size, with a capacity of around 2-3 ounces, which is the perfect size for a shot of espresso. The glass is also transparent, which allows you to see the rich, dark color of the espresso as it is poured and consumed.  The double-walled glass espresso cup is often paired with a matching saucer, which provides a stable base for the cup and also provides a place to set a small spoon or biscuit. Overall, the double-walled glass espresso cup is a stylish and functional way to enjoy the rich and complex flavors of a shot of espresso.'
        )
        ['de-DE'](
          'Eine doppelwandige Espressotasse aus Glas ist eine Art Trinkgefäß, das speziell zum Servieren von Espresso entwickelt wurde. Sie besteht aus Glas und ist doppelwandig aufgebaut, was bedeutet, dass es zwei Glasschichten gibt, die durch einen kleinen Spalt getrennt sind.  Das doppelwandige Design der Espressotasse aus Glas bietet mehrere Vorteile. Erstens hilft es, den Espresso zu isolieren, wodurch er länger heiß bleibt. Zweitens sorgt die doppelwandige Konstruktion dafür, dass sich die Außenseite der Tasse kühl anfühlt, wodurch sie auch bei sehr heißem Espresso angenehm in der Hand liegt.  Die Tasse ist normalerweise klein und hat ein Fassungsvermögen von etwa 2-3 Unzen, was die perfekte Größe für einen Schuss Espresso ist. Das Glas ist außerdem transparent, sodass Sie die satte, dunkle Farbe des Espressos sehen können, wenn er eingeschenkt und getrunken wird.  Die doppelwandige Espressotasse aus Glas wird oft mit einer passenden Untertasse kombiniert, die der Tasse einen stabilen Stand bietet und auch Platz für einen kleinen Löffel oder Keks bietet. Insgesamt ist die doppelwandige Espressotasse aus Glas eine stilvolle und funktionale Möglichkeit, die reichen und komplexen Aromen eines Espressos zu genießen.'
        )
        ['en-US'](
          'A double-walled glass espresso cup is a type of drinking vessel that is specifically designed for serving espresso. It is made of glass and features a double-walled construction, which means that there are two layers of glass that are separated by a small gap.  The double-walled design of the glass espresso cup provides several benefits. First, it helps to insulate the espresso, which keeps it hot for longer periods of time. Second, the double-walled construction keeps the outside of the cup cool to the touch, which makes it comfortable to hold even when the espresso inside is very hot.  The cup is typically small in size, with a capacity of around 2-3 ounces, which is the perfect size for a shot of espresso. The glass is also transparent, which allows you to see the rich, dark color of the espresso as it is poured and consumed.  The double-walled glass espresso cup is often paired with a matching saucer, which provides a stable base for the cup and also provides a place to set a small spoon or biscuit. Overall, the double-walled glass espresso cup is a stylish and functional way to enjoy the rich and complex flavors of a shot of espresso.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('double-walled-espresso-glass')
        ['de-DE']('doppelwandiges-espressoglas')
        ['en-US']('double-walled-espresso-glass')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(doubleWalledEspressoGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.doubleWalledEspressoGlass01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default doubleWalledEspressoGlass;
