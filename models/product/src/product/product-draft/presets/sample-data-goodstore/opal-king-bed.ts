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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const opalKingBedProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const opalKingBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('opal-king-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Opal King Bed')
        ['de-DE']('Opal Kingsize-Bett')
        ['en-US']('Opal King Bed')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.'
        )
        ['de-DE'](
          'Ein modernes Kingsize-Bett mit getuftetem Kopfteil ist ein stilvolles und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Luxus und Raffinesse verleihen kann. Die Matratzenplattform ist groß genug, um eine Kingsize-Matratze aufzunehmen, und das gesamte Bett ist mit klaren, schlanken Linien gestaltet, die ihm ein modernes Aussehen verleihen.  Das getuftete Kopfteil ist das Herzstück des Bettes und oft der auffälligste Blickfang. Es besteht aus weichem, strapazierfähigem Stoff, der in einem quadratischen Muster getuftet ist. Das getuftete Design verleiht dem Kopfteil ein weiches, gepolstertes Aussehen und macht es bequem, im Bett zu sitzen, um zu lesen oder fernzusehen.  Das Gesamtdesign des Bettes ist modern und betont die Schönheit des getufteten Kopfteils.  Insgesamt ist ein modernes Kingsize-Bett mit getuftetem Kopfteil ein Statement-Stück, das jedem Schlafzimmer sowohl Stil als auch Komfort verleihen kann.'
        )
        ['en-US'](
          'A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('opal-king-bed')
        ['de-DE']('opal-kingsize-bett')
        ['en-US']('opal-king-bed')
    )
    .productType(
      KeyReference.presets.productType().key(opalKingBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.opalKingBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default opalKingBed;
