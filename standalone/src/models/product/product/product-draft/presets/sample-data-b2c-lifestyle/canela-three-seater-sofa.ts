import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const canelaThreeSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .sofas()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const canelaThreeSeaterSofa = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('canela-three-seater-sofa')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Canela Three-Seater Sofa')
        ['en-GB']('Canela Three-Seater Sofa')
        ['de-DE']('Canela 3-Sitzer-Sofa')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.')
        [
          'en-US'
        ]('A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.')
        [
          'de-DE'
        ]('Ein Leder-Dreisitzer-Sofa ist ein Möbelstück, das entworfen wurde, um bequemen Platz für drei Personen zu bieten. Das Sofa ist aus hochwertigem Leder gefertigt, das für seine Langlebigkeit, Stärke und natürliche Schönheit bekannt ist. Das Ledermaterial ist mit einer Schutzbeschichtung behandelt, um es widerstandsfähiger gegen Abnutzung, Flecken und Spritzer zu machen.  Das Sofa verfügt über einen stabilen Rahmen aus Holz mit einer Reihe von Federn und Kissen, die den sitzenden Personen Halt und Komfort bieten. Die Kissen sind mit Daunenfedern gefüllt.  Das Ledersofa hat klare Linien und minimale dekorative Elemente für einen moderneren oder zeitgemäßeren Look.  Ein Leder-Dreisitzer-Sofa ein vielseitiges und stilvolles Möbelstück, das bequeme Sitzgelegenheiten bietet und jedem Wohnraum einen Hauch von Eleganz verleiht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('canela-three-seater-sofa')
        ['en-GB']('canela-three-seater-sofa')
        ['de-DE']('canela-3-sitzer-sofa')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(canelaThreeSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.canelaThreeSeaterSofa01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(sofasDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default canelaThreeSeaterSofa;
