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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const teakServingPlatterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const cheeseTraysDraft = CategoryDraft.presets.sampleDataGoodStore
  .cheeseTrays()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const teakServingPlatter = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('teak-serving-platter')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Teak Serving Platter')
        ['en-GB']('Teak Serving Platter')
        ['de-DE']('Servierplatte aus Teakholz')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The teak material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.'
        )
        ['de-DE'](
          'Dieses Serviertablett aus Holz ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Teakholz sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.  Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Ein Serviertablett aus Holz ist ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit und Designvielfalt machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und Gegenständen.'
        )
        ['en-GB'](
          'This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The teak material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('teak-serving-platter')
        ['en-GB']('teak-serving-platter')
        ['de-DE']('servierplatte-aus-teakholz')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(teakServingPlatterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.teakServingPlatter01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(cheeseTraysDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
    ]);

export default teakServingPlatter;
