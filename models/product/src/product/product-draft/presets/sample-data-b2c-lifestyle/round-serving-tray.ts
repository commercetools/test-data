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

const roundServingTrayProductTypeDraft =
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

const cheeseTraysDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .cheeseTrays()
  .build<TCategoryDraft>();

const roundServingTray = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('round-serving-tray')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Round Serving Tray')
        ['en-GB']('Round Serving Tray')
        ['de-DE']('Rundes Serviertablett')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.')
        [
          'en-US'
        ]('This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.')
        [
          'de-DE'
        ]('Das runde Serviertablett aus Holz ist ein vielseitiger und langlebiger Gegenstand, der in einer Vielzahl von Gelegenheiten zum Einsatz kommt. Das für das Tablett verwendete Holz mit seiner warmen und natürlichen Ästhetik sorgt für den rustikalen Charme. Runde Holztabletts sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden. Nach dem Gebrauch sollten sie gründlich getrocknet werden, damit keine Feuchtigkeit im Inneren eingeschlossen wird. Ein rundes Serviertablett aus Holz ist ein praktisches und zugleich attraktives Designelement, das jedes Ambiente mit seiner natürlichen Eleganz komplementiert. Es ist langlebig und vielseitig einsetzbar zum Servieren und Präsentieren von Speisen und Getränken, oder aber als Designelement zum Hervorheben einzelner Gegenstände.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('round-serving-tray')
        ['en-GB']('round-serving-tray')
        ['de-DE']('rundes-serviertablett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(roundServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.roundServingTray01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(platesDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(cheeseTraysDraft.key!),
    ]);

export default roundServingTray;
