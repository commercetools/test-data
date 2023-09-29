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

const cloudQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const cloudQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cloud-queen-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Cloud Queen Bed')
        ['en-GB']('Cloud Queen Bed')
        ['de-DE']('Queen-Bett "Cloud"')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.'
        )
        ['en-US'](
          'A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.'
        )
        ['de-DE'](
          'Ein Queensize-Bett mit Stoffbezug und kissenartigem Kopfteil ist ein komfortables und elegantes Schlafzimmermöbel. Der Bettrahmen ist rechteckig und groß genug, um eine Standardmatratze in Queen-Size-Größe aufzunehmen. Die Stoffpolsterung bedeckt den gesamten Rahmen und schafft eine glatte und bequeme Oberfläche zum Anlehnen. Das Kopfteil ist das Herzstück des Bettes, mit einer weichen und plüschigen Oberfläche, die einem Kissen ähnelt. Es hat eine rechteckige Form und ist oben am Bettrahmen befestigt und bietet eine bequeme Rückenlehne zum Lesen oder Fernsehen im Bett. Das Kopfteil kann mit dem gleichen Stoff wie der Bettrahmen oder in einer komplementären Farbe oder einem Muster bezogen werden. Insgesamt vereint dieses Bett Komfort und Stil und ist somit eine perfekte Ergänzung für jedes Schlafzimmer.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('cloud-queen-bed')
        ['en-GB']('cloud-queen-bed')
        ['de-DE']('cloud-queen-bett')
    )
    .productType(
      KeyReference.presets.productType().key(cloudQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cloudQueenBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedsDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
    ]);

export default cloudQueenBed;
