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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const steelHipFlaskProductTypeDraft =
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

const steelHipFlask = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('steel-hip-flask')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Steel Hip Flask')
        ['en-GB']('Steel Hip Flask')
        ['de-DE']('Flachmann aus Stahl')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.'
        )
        ['de-DE'](
          'Der Flachmann aus Stahl ist ein kleiner, gebogener und flacher Behälter aus Edelstahl. Er ist so konzipiert, dass er eine kleine Menge alkoholischer Getränke aufnehmen und transportieren kann, normalerweise umfasst er etwa 6 bis 10 Unzen. Der Flachmann hat einen Scharnier- oder Schraubdeckel, der ein einfaches Öffnen und Schließen ermöglicht, sowie eine kleine Öffnung zum Ausgießen oder Trinken des Inhalts. Die Außenseite des Trinkbehälters ist glatt. Flachmänner werden oft in einer Tasche oder Handtasche getragen und eignen sich ideal für den diskreten Konsum von Alkohol unterwegs.'
        )
        ['en-GB'](
          'A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('steel-hip-flask')
        ['en-GB']('steel-hip-flask')
        ['de-DE']('flachmann-aus-stahl')
    )
    .productType(
      KeyReference.presets.productType().key(steelHipFlaskProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.steelHipFlask01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default steelHipFlask;
