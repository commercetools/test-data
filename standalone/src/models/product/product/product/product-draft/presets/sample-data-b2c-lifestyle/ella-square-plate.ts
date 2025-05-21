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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ellaSquarePlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const platesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dinnerware()
  .build<TCategoryDraft>();

const ellaSquarePlate = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('ella-square-plate')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Ella Square Plate')
        ['en-GB']('Ella Square Plate')
        ['de-DE']('Quadratischer Teller "Ella"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Dieser quadratische Teller "Ella" ist ideal zum Servieren oder Präsentieren von Speisen, von Vorspeisen und Hauptgerichten bis hin zu Desserts und Snacks. Er kann sowohl für formelle als auch für ungezwungene Anlässe verwendet werden, und seine Einfachheit und Vielseitigkeit machen ihn zu einer beliebten Wahl für viele verschiedene Arten von Küchen.  Insgesamt ist ein quadratischer Keramikteller eine funktionale und stilvolle Wahl zum Servieren von Mahlzeiten und kann jedem Speiseerlebnis einen Hauch von Eleganz verleihen.')
        [
          'en-GB'
        ]('This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.')
        [
          'en-US'
        ]('This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('ella-square-plate')
        ['de-DE']('ella-quadratische-platte')
        ['en-US']('ella-square-plate')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(ellaSquarePlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.ellaSquarePlate01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(platesDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
    ]);

export default ellaSquarePlate;
