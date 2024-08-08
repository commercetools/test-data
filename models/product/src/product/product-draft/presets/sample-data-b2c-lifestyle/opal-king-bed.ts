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

const opalKingBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .beds()
  .build<TCategoryDraft>();

const opalKingBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('opal-king-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Opal King Bed')
        ['de-DE']('Opal King Bett')
        ['en-US']('Opal King Bed')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.')
        [
          'de-DE'
        ]('Ein modernes Kingsize-Bett mit getuftetem Kopfteil ist ein stilvolles und elegantes Möbelstück, das einen Hauch von Luxus und Raffinesse in jedes Schlafzimmer bringen kann. Die Matratzenplattform ist groß genug, um eine Kingsize-Matratze aufzunehmen, und das gesamte Bett ist mit klaren, schlanken Linien gestaltet, die ihm einen modernen Look verleihen. Das getuftete Kopfteil ist das Herzstück des Bettes und oft der Blickfang schlechthin. Es ist aus weichem, strapazierfähigem Stoff gefertigt, der in einem quadratischen Muster getuftet ist. Das getuftete Design verleiht dem Kopfteil ein plüschiges, gepolstertes Aussehen und macht es bequem, wenn man im Bett sitzt, um zu lesen oder fernzusehen. Das Gesamtdesign des Bettes ist modern und unterstreicht die Schönheit des getufteten Kopfteils. Insgesamt ist ein modernes Doppelbett mit getuftetem Kopfteil ein Highlight, das jedes Schlafzimmer mit Stil und Komfort bereichert.')
        [
          'en-US'
        ]('A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('opal-king-bed')
        ['de-DE']('opal-kingsize-bett')
        ['en-US']('opal-king-bed')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(opalKingBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.opalKingBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
    ]);

export default opalKingBed;
