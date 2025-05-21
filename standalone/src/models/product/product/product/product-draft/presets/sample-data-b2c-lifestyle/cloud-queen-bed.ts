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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cloudQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .beds()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const cloudQueenBed = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('cloud-queen-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Cloud Queen Bed')
        ['en-GB']('Cloud Queen Bed')
        ['de-DE']('Queen-Bett "Cloud"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.')
        [
          'en-US'
        ]('A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.')
        [
          'de-DE'
        ]('Ein Queensize-Bett mit Stoffbezug - auch auf dem Kopfteil  - ist ein komfortables und elegantes Schlafzimmermöbel. Der Bettrahmen ist rechteckig und groß genug, um eine Standardmatratze in Queen-Size-Größe aufzunehmen. Die Stoffpolsterung bedeckt den gesamten Rahmen und schafft eine glatte und bequeme Oberfläche zum Anlehnen. Das Kopfteil ist das Herzstück des Bettes, mit einer weichen und plüschigen Oberfläche, die einem Kissen ähnelt. Es hat eine rechteckige Form und ist oben am Bettrahmen befestigt und bietet eine bequeme Rückenlehne zum Lesen oder Fernsehen im Bett. Das Kopfteil kann mit dem gleichen Stoff wie der Bettrahmen oder in einer komplementären Farbe oder einem Muster bezogen werden. Insgesamt vereint dieses Bett Komfort und Stil und ist somit eine perfekte Ergänzung für jedes Schlafzimmer.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('cloud-queen-bed')
        ['en-GB']('cloud-queen-bed')
        ['de-DE']('cloud-queen-bett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(cloudQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.cloudQueenBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
    ]);

export default cloudQueenBed;
