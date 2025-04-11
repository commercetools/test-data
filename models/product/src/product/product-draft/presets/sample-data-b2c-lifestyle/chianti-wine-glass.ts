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
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const chiantiWineGlassProductTypeDraft =
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

const chiantiWineGlass = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('chianti-wine-glass')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Chianti Wine Glass')
        ['en-GB']('Chianti Wine Glass')
        ['de-DE']('Chianti Weinglas')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.')
        [
          'en-US'
        ]('The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.')
        [
          'de-DE'
        ]('Das Chianti Weinglas wurde speziell entwickelt, um das Erlebnis beim Trinken von Rotwein zu verbessern. Es hat einen runden oder leicht konisch zulaufenden Körper, der größer ist als der eines Weißweinglases, wodurch der Wein atmen und sein volles Aroma und seinen vollen Geschmack entfalten kann.  Das Rotweinglas ist unten breiter und verjüngt sich leicht nach oben, wodurch die Aromen des Weins konzentriert und zur Nase geleitet werden. Der Stiel des Glases ist lang und schlank. Dadurch kann das Glas gehalten werden, ohne den Wein zu erwärmen. Dieses Rotweinglas ist ein stilvolles und funktionales Glas, das speziell entwickelt wurde, um den Geschmack und das Aroma von Rotwein zu verbessern. Sein elegantes Design und die Liebe zum Detail machen es zu einer beliebten Wahl für Weinliebhaber und Gelegenheitstrinker gleichermaßen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('chianti-wine-glass')
        ['en-GB']('chianti-wine-glass')
        ['de-DE']('chianti-weinglas')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(chiantiWineGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.chiantiWineGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default chiantiWineGlass;
