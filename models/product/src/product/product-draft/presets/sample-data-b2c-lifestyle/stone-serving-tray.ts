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
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const stoneServingTrayProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
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

const servingPlattersDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .servingPlatters()
  .build<TCategoryDraft>();

const bakewareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bakeware()
  .build<TCategoryDraft>();

const stoneServingTray = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('stone-serving-tray')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Stone Serving Tray')
        ['en-GB']('Stone Serving Tray')
        ['de-DE']('Serviertablett aus Stein')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]("The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.")
        [
          'de-DE'
        ]('Dieses Serviertablett besteht aus Naturstein und wurde zum Servieren und Präsentieren von Speisen designt. Das Tablett besteht aus stabilem Schiefer.  Das Gewicht und die Textur des Steinmaterials verleihen dem Tablett Stabilität und ein Gefühl von Luxus. Sie machen es darüber hinaus zum idealen Utensil zum Servieren einer Vielzahl von Speisen, wie zum Beispiel Käse, Obst oder Brot. Das Natursteinmaterial des Tabletts macht es zudem zu einer ausgezeichneten Wahl für den Einsatz im Freien, z. B. bei einem Picknick oder beim Grillen.  Ein Serviertablett aus Stein ist leicht zu reinigen und zu pflegen. Es kann mit Wasser und Seife gewaschen werden und sollte nach Gebrauch gründlich getrocknet werden, um das Eindringen von Feuchtigkeit ins Innere zu vermeiden.  Ein Serviertablett aus Stein ist ein funktionales und ästhetisch ansprechendes Element, das jeder Umgebung einen Hauch von natürlicher Eleganz verleiht. Seine Haltbarkeit, Stabilität und sein einzigartiges Design machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen und Getränken.')
        [
          'en-GB'
        ]("The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('stone-serving-tray')
        ['en-GB']('stone-serving-tray')
        ['de-DE']('serviertablett-aus-stein')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(stoneServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.stoneServingTray01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(cheeseTraysDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(bakewareDraft.key!),
    ]);

export default stoneServingTray;
