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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const classicServingTrayProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const classicServingTray = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('classic-serving-tray')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Classic Serving Tray')
        ['en-GB']('Classic Serving Tray')
        ['de-DE']('Klassisches Serviertablett')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.')
        [
          'en-US'
        ]('This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.')
        [
          'de-DE'
        ]('Dieses klassische Serviertablett ist ein vielseitiger und funktionaler Artikel. Das Tablett ist rechteckig, mit erhöhten Kanten und Griffen auf beiden Seiten, wodurch es leicht zu tragen und zu transportieren ist.  Dieses klassische Serviertablett zeichnet sich durch ein einfaches und zeitloses Design mit klaren Linien und einer minimalistischen Ästhetik aus. Es kann für eine Vielzahl von Zwecken verwendet werden, z. B. zum Transport von Getränken und Häppchen, zum Servieren des Frühstücks am Bett oder zum Präsentieren von Dekorationsgegenständen.  Zur Reinigung wird empfohlen, es mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm von Hand zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die Oberfläche des Tabletts beschädigen können. Zusammengefasst handelt es sich um ein klassisches Serviertablett mit praktischen und stilvollen Elementen, welches jeder Umgebung einen Hauch von Raffinesse verleiht. Sein zeitloses Design und seine Vielseitigkeit machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('classic-serving-tray')
        ['en-GB']('classic-serving-tray')
        ['de-DE']('klassisches-serviertablett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(classicServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.classicServingTray01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default classicServingTray;
