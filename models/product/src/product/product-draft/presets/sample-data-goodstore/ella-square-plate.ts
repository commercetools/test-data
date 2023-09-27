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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ellaSquarePlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodStore
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const ellaSquarePlate = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ella-square-plate')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Ella Square Plate')
        ['de-DE']('Ella Quadratische Platte')
        ['en-US']('Ella Square Plate')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.'
        )
        ['de-DE'](
          'Dieser quadratische Ella-Keramikteller ist eine flache, vierseitige Schale, die sich ideal zum Servieren oder Präsentieren von Speisen eignet. Eine flache quadratische Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, von Vorspeisen und Hauptgerichten bis hin zu Desserts und Snacks. Es kann sowohl für formelle als auch für ungezwungene Anlässe verwendet werden, und seine Einfachheit und Vielseitigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen.  Insgesamt ist ein quadratischer Keramikteller eine funktionale und stilvolle Wahl zum Servieren von Mahlzeiten und kann jedem Speiseerlebnis einen Hauch von Eleganz verleihen.'
        )
        ['en-US'](
          'This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('ella-square-plate')
        ['de-DE']('ella-quadratische-platte')
        ['en-US']('ella-square-plate')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(ellaSquarePlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.ellaSquarePlate01()
    )
    .categories([
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
    ]);

export default ellaSquarePlate;
