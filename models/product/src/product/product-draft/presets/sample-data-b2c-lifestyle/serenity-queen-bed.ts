import type {
  TCategoryDraft} from '@commercetools-test-data/category';
import {
  CategoryDraft
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

const serenityQueenBedProductTypeDraft =
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

const serenityQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('serenity-queen-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Serenity Queen Bed')
        ['en-GB']('Serenity Queen Bed')
        ['de-DE']('Queensize-Bett >Serenity<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.')
        [
          'en-US'
        ]('A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.')
        [
          'de-DE'
        ]('Das Queensize-Bett mit gepolstertem Kopfteil im industriellen Look hat ein einzigartiges und kantigen Design. Das Kopfteil ist mit einem robusten beigefarbenen Stoff bezogen und ist mit Lederriemen versehen, die ihm zusammen mit den freiliegenden Schrauben ein industrielles Aussehen verleihen. Der Rahmen ist mit dem gleichen Stoff wie das Kopfteil bespannt. Das französische Bett hat ein schlichtes, minimalistisches Design unterstützt durch den Holzrahmen und den geraden Linien, die das Statement des Kopfteils abrunden. Das Bett eignet sich ideal für all diejenigen, die ihrem Schlafzimmerdekor einen Hauch von industriellem Charme verleihen möchten.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('serenity-queen-bed')
        ['en-GB']('serenity-queen-bed')
        ['de-DE']('gelassenheit-queen-bett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(serenityQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.serenityQueenBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
    ]);

export default serenityQueenBed;
