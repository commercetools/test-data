import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const marquisTrayProductTypeDraft =
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

const cheeseTraysDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .cheeseTrays()
  .build<TCategoryDraft>();

const marquisTray = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('marquis-tray')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Marquis Tray')
        ['en-GB']('Marquis Tray')
        ['de-DE']('Marquis Tablett')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.')
        [
          'en-US'
        ]('This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.')
        [
          'de-DE'
        ]('Dieses Serviertablett aus Holz ist ideal zum Servieren einer Vielzahl von Speisen und Getränken, einschließlich Vorspeisen, Hauptgerichten, Cocktails und Kaffee. Es kann sowohl in ungezwungener als auch in formeller Umgebung verwendet werden und ist eine beliebte Wahl für Mahlzeiten im Freien, Picknicks und Grillabende.  Serviertabletts aus Holz sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können mit einem feuchten Tuch abgewischt oder mit Wasser und Seife gewaschen werden.  Insgesamt ist ein Serviertablett aus Holz eine funktionale und stilvolle Wahl zum Servieren von Speisen und Getränken. Sein natürliches Material und seine einzigartige Textur verleihen jedem Essbereich Wärme und Charakter, während seine Vielseitigkeit und Praktikabilität es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern machen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('marquis-tray')
        ['en-GB']('marquis-tray')
        ['de-DE']('marquis-tablett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(marquisTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.marquisTray01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(platesDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(cheeseTraysDraft.key!),
    ]);

export default marquisTray;
