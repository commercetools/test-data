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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const rusticBowlProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rusticBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Rustic Bowl')
        ['en-GB']('Rustic Bowl')
        ['de-DE']('Rustikale Schale')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.'
        )
        ['en-US'](
          'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.'
        )
        ['de-DE'](
          'Diese quadratische Holzschale bietet vielfältige Einsatzmöglichkeiten - vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Sie fügt sich ideal in jede ungezwungene oder rustikale Speiseumgebungen ein und verleiht jedem Tisch einen Hauch von Wärme und natürlicher Schönheit. Die quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Ihre natürliche Schönheit und Langlebigkeit bietet verschiedene Einsatzmöglichkeiten in der Küche und als Servierobjekt bei unterschiedlichen Anlässen.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('rustic-bowl')
        ['en-GB']('rustic-bowl')
        ['de-DE']('rustikale-schale')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(rusticBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.rusticBowl01()
    )
    .categories([]);

export default rusticBowl;
