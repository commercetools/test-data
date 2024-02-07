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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ariaRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodStore
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const ariaRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('aria-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Aria Rug')
        ['en-GB']('Aria Rug')
        ['de-DE']('Teppich "Aria"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.'
        )
        ['en-GB'](
          'The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.'
        )
        ['en-US'](
          'The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('aria-rug')
        ['en-GB']('aria-rug')
        ['de-DE']('aria-teppich')
    )
    .productType(
      KeyReferenceDraft.presets.productType().key(ariaRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataGoodStore.ariaRug01())
    .categories([
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default ariaRug;
