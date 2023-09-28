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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const chiantiWineGlassProductTypeDraft =
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

const chiantiWineGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('chianti-wine-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Chianti Wine Glass')
        ['en-GB']('Chianti Wine Glass')
        ['de-DE']('Chianti Weinglas')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.'
        )
        ['en-US'](
          'The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.'
        )
        ['de-DE'](
          'Das Chianti-Weinglas wurde speziell entwickelt, um das Erlebnis beim Trinken von Rotwein zu verbessern. Es hat einen runden oder leicht konisch zulaufenden Kelch, der größer ist als der eines Weißweinglases, wodurch der Wein atmen und sein volles Aroma und seinen vollen Geschmack entfalten kann.  Der Kelch eines Rotweinglases ist unten breiter und verjüngt sich leicht nach oben, wodurch die Aromen des Weins konzentriert und zur Nase geleitet werden. Der Stiel des Glases ist typischerweise lang und schlank, sodass der Trinker das Glas halten kann, ohne den Wein mit seiner Körperwärme zu erwärmen.  Insgesamt ist ein Rotweinglas ein stilvolles und funktionales Glasgeschirr, das speziell entwickelt wurde, um den Geschmack und das Aroma von Rotwein zu verbessern. Sein elegantes Design und die Liebe zum Detail machen ihn zu einer beliebten Wahl für Weinliebhaber und Gelegenheitstrinker gleichermaßen.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('chianti-wine-glass')
        ['en-GB']('chianti-wine-glass')
        ['de-DE']('chianti-weinglas')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(chiantiWineGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.chiantiWineGlass01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default chiantiWineGlass;
