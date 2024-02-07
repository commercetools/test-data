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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const indoorJutePlanterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeAccents()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const indoorJutePlanter = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('indoor-jute-planter')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Indoor Jute Planter')
        ['en-GB']('Indoor Jute Planter')
        ['de-DE']('Indoor Jute Blumentopf ')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB'](
          'An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.'
        )
        ['en-US'](
          'An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.'
        )
        ['de-DE'](
          'Ein Indoor-Blumentopf für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Pflanzen in Ihrem Zuhause zu präsentieren. Der Blumentopf besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind. Die neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen. Die Jutefasern des Blumentopfes sind saugfähig und ermöglichen eine ordnungsgemäße Entwässerung und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten. Insgesamt ist ein Blumentopf aus Jute für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig die Umwelt zu schonen.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('indoor-jute-planter')
        ['en-GB']('indoor-jute-planter')
        ['de-DE']('indoor-jute-planter')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(indoorJutePlanterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.indoorJutePlanter01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.indoorJutePlanter02(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default indoorJutePlanter;
