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

const modernUpholsteredQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .beds()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theModernist()
  .build<TCategoryDraft>();

const modernUpholsteredQueenBed = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('modern-upholstered-queen-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Upholstered Queen Bed')
        ['de-DE']('Modernes gepolstertes Queensize-Bett')
        ['en-US']('Modern Upholstered Queen Bed')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.")
        [
          'de-DE'
        ]('Ein mit Samtstoff gepolstertes Bett mit Messingnägeln und Tufting ist ein luxuriöses und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Glamour und Raffinesse verleihen kann. Das Bett besteht aus einem Holzrahmen, der mit einem weichen und plüschigen Samtbezug überzogen ist. Das Kopfteil des Bettes ist der Mittelpunkt des Designs und weist ein getuftetes oder gestepptes Muster auf, das eine weiche und einladende Oberfläche zum Anlehnen bietet. Die Tuftings sind mit Messingnägeln akzentuiert, die dem Design einen Hauch von metallischem Glanz und Textur verleihen. Das Fußteil und die Seitengitter des Bettes sind ebenfalls mit demselben Samtstoff bezogen und mit Messingnagelköpfen verziert, wodurch ein einheitliches und stilvolles Erscheinungsbild entsteht. Die Beine des Bettes sind aus Holz. Die Größe des Bettes bietet reichlich Platz für eine komfortable Nachtruhe, während die luxuriöse Samtpolsterung und die Messingakzente dem Raum einen Hauch von Glamour und Raffinesse verleihen. Das Bett kann mit einer Reihe von Bettwaren und Accessoires, wie z. B. Plüschkissen und weichen Decken, kombiniert werden, um eine gemütliche und einladende Atmosphäre zu schaffen. Insgesamt ist ein mit Samtstoff gepolstertes Bett mit Messingnägeln und Tufting ein atemberaubendes und stilvolles Möbelstück, das jedes Schlafzimmer in einen luxuriösen und eleganten Raum verwandeln kann. Die plüschige Polsterung, die raffinierten Tuftings und die metallischen Akzente machen es zu einem herausragenden Möbelstück, das Sie sicher beeindrucken und begeistern wird.')
        [
          'en-US'
        ]("A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-upholstered-queen-bed')
        ['de-DE']('modernes-gepolstertes-queensize-bett')
        ['en-US']('modern-upholstered-queen-bed')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernUpholsteredQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernUpholsteredQueenBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(theModernistDraft.key!),
    ]);

export default modernUpholsteredQueenBed;
