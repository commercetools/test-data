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

const modernUpholsteredTwinBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theModernist()
  .build<TCategoryDraft>();

const modernUpholsteredTwinBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-upholstered-twin-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Upholstered Twin Bed')
        ['de-DE']('Modernes gepolstertes Doppelbett')
        ['en-US']('Modern Upholstered Twin Bed')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB'](
          'A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.'
        )
        ['de-DE'](
          'Ein Doppelbett mit Stoffbezug im modernen Stil ist ein elegantes und stilvolles Möbelstück, das jedem Schlafzimmer einen Hauch von Raffinesse verleihen kann. Das Bett zeichnet sich durch ein einfaches und minimalistisches Design aus, mit klaren Linien und geometrischen Formen, die für den modernen Stil charakteristisch sind. Der Rahmen des Bettes ist aus Holz gefertigt und hat ein niedriges Profil, das einen schlanken und modernen Look erzeugt. Das Kopfteil, das Fußteil und die Seitengitter des Bettes sind mit Stoff bezogen und bieten eine weiche und bequeme Oberfläche zum Anlehnen und Ausruhen. Das Bett hat eine Größe von zwei Einzelbetten und ist daher ideal für kleinere Schlafzimmer oder Gästezimmer. Es kann mit einer Reihe von Bettwaren und Accessoires kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen, der Ihren persönlichen Stil widerspiegelt. Insgesamt ist ein Doppelbett mit Stoffbezug im modernen Stil ein elegantes und raffiniertes Möbelstück, das jedes Schlafzimmer aufwerten kann. Das schlichte, aber stilvolle Design in Kombination mit der bequemen und weichen Polsterung machen es zu einem perfekten Ort, um sich stilvoll auszuruhen und zu entspannen.'
        )
        ['en-US'](
          'A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-upholstered-twin-bed')
        ['de-DE']('modernes-gepolstertes-einzelbett')
        ['en-US']('modern-upholstered-twin-bed')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernUpholsteredTwinBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed02(),
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed03(),
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed04(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(theModernistDraft.key!),
    ]);

export default modernUpholsteredTwinBed;
