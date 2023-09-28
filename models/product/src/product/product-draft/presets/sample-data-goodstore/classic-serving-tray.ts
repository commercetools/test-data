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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const classicServingTrayProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const classicServingTray = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('classic-serving-tray')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Classic Serving Tray')
        ['en-GB']('Classic Serving Tray')
        ['de-DE']('Klassisches Serviertablett')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.'
        )
        ['en-US'](
          'This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.'
        )
        ['de-DE'](
          'Dieses klassische Serviertablett ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das Tablett ist rechteckig, mit erhöhten Kanten und Griffen auf beiden Seiten, wodurch es leicht zu tragen und zu transportieren ist.  Dieses klassische Serviertablett zeichnet sich durch ein einfaches und zeitloses Design mit klaren Linien und einer minimalistischen Ästhetik aus. Es kann für eine Vielzahl von Zwecken verwendet werden, z. B. zum Transport von Getränken und Häppchen, zum Servieren des Frühstücks im Bett oder zum Präsentieren von Dekorationsgegenständen.  Zur Reinigung wird empfohlen, es mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm von Hand zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die Oberfläche des Tabletts beschädigen können.  Insgesamt ist ein klassisches Serviertablett ein praktisches und stilvolles Element, das jeder Umgebung einen Hauch von Raffinesse verleiht. Sein zeitloses Design und seine Vielseitigkeit machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('classic-serving-tray')
        ['en-GB']('classic-serving-tray')
        ['de-DE']('klassisches-serviertablett')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(classicServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.classicServingTray01()
    )
    .categories([
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default classicServingTray;
