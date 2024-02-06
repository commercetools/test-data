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

const greenServingPlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodStore
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const greenServingPlate = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('green-serving-plate')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Green Serving Plate')
        ['en-GB']('Green Serving Plate')
        ['de-DE']('Grüne Servierplatte')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['de-DE'](
          'Eine stilvolle grüne Servierplatte ist ein Teller, der entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren. Die Platte ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Servierplatte Tiefe und Textur verleiht. Die Form der Platte kann variieren. Einige gebogenen Kanten machen sie visuell zusätzlich interessant. Der Teller hat ein dekoratives Muster und eine Textur.  Eine stilvolle grüne Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist der Teller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen ihn zu einem Blickfang auf jedem Tisch, während seine Stabilität und Praktikabilität dafür sorgen, dass er sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.'
        )
        ['en-GB'](
          'A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.'
        )
        ['en-US'](
          'A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('green-serving-plate')
        ['en-GB']('green-serving-plate')
        ['de-DE']('grne-servierplatte')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(greenServingPlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.greenServingPlate01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(platesDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
    ]);

export default greenServingPlate;
