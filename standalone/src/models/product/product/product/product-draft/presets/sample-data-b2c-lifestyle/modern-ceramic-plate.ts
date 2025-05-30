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

const modernCeramicPlateProductTypeDraft =
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

const modernCeramicPlate = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('modern-ceramic-plate')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Ceramic Plate')
        ['de-DE']('Moderne Keramikplatte')
        ['en-US']('Modern Ceramic Plate')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.')
        [
          'de-DE'
        ]('Ein Keramikteller ist ein klassischer und vielseitiger Teller, der zum Servieren einer Vielzahl von Speisen verwendet wird. Der Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen der Speisen zu verhindern. Keramische Essteller eignen sich ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in zwanglosem als auch in formellem Rahmen verwendet werden und sind sowohl in Restaurants als auch in Privathaushalten eine beliebte Wahl.  Keramische Essteller sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gereinigt werden. Insgesamt ist ein Keramikteller eine klassische und funktionelle Wahl für das Servieren von Speisen. Seine Schlichtheit und Langlebigkeit machen ihn zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht ihn für eine Reihe von Essanlässen geeignet.')
        [
          'en-US'
        ]('A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-ceramic-plate')
        ['de-DE']('moderne-keramikplatte')
        ['en-US']('modern-ceramic-plate')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernCeramicPlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernCeramicPlate01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(platesDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(cheeseTraysDraft.key!),
    ]);

export default modernCeramicPlate;
