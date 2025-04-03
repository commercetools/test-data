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
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const tanQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .beds()
  .build<TCategoryDraft>();

const tanQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('tan-queen-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Tan Queen Bed')
        ['en-GB']('Tan Queen Bed')
        ['de-DE']('Hellbraunes Queensize-Bett')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.')
        [
          'de-DE'
        ]('Das Queensize-Bett mit gepolstertem Kopfteil aus Leder ist ein stilvolles und raffiniertes Möbelstück. Das Kopfteil ist hoch und breit und bietet ein gepolstertes Design mit luxuriösem Lederbezug, das es zu einen bequemen Platz zum Anlehnen im Bett macht. Das Leder ist weich und geschmeidig und verleiht dem Bett einen Hauch von Eleganz und Raffinesse.  Das Bettgestell besteht aus stabilem Holz und ist in passender Farbe zum Lederkopfteil gehalten. Das Bett hat einen Lattenrost, der eine solide Grundlage für die Matratze bietet und dem Komfort eines Boxspringbetts gleichkommt.  Diese Art von Bett wird oft in zeitgenössischen oder Übergangsdesignstilen bevorzugt und kann mit einer Reihe von Betttextilien und Dekorationsartikeln kombiniert werden, um einen luxuriösen und einladenden Schlafbereich zu schaffen. Ein Queensize-Bett mit einem gepolsterten Kopfteil aus Leder ist ein Statement-Stück, das jedem Schlafzimmer sowohl Komfort als auch Stil verleiht.')
        [
          'en-GB'
        ]('A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('tan-queen-bed')
        ['en-GB']('tan-queen-bed')
        ['de-DE']('hellbraunes-queen-bett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(tanQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.tanQueenBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
    ]);

export default tanQueenBed;
