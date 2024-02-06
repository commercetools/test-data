import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const doubleSidedShotGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const doubleSidedShotGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('double-sided-shot-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Double-sided Shot Glass')
        ['en-GB']('Double-sided Shot Glass')
        ['de-DE']('Doppelseitiges Schnapsglas')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.'
        )
        ['en-US'](
          'This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.'
        )
        ['de-DE'](
          'Dieses Stahlschnapsglas besteht aus Stahl und hat zwei Enden, eines zum Messen eines Standardschnapses und das andere zum Messen eines größeren Doppelschnapses. Die Enden sind wie kleine Tassen mit abgerundeten Kanten zum einfachen Ausgießen geformt. Die Stahlkonstruktion macht es langlebig und verschleißfest und bietet gleichzeitig ein elegantes und modernes Erscheinungsbild.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('double-sided-shot-glass')
        ['de-DE']('doppelseitiges-schnapsglas')
        ['en-US']('double-sided-shot-glass')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(doubleSidedShotGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.doubleSidedShotGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default doubleSidedShotGlass;
