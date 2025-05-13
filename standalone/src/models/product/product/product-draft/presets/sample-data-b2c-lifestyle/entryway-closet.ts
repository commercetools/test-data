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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const entrywayClosetProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dressers()
  .build<TCategoryDraft>();

const entrywayCloset = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('entryway-closet')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Entryway Closet')
        ['en-GB']('Entryway Closet')
        ['de-DE']('Einbauschrank')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('An entryway closet with mirrors and lights is a built-in closet that is situated near the entrance of a house or apartment. The closet features full-length mirrors, which are designed to allow people to check their appearance before leaving the house. The closet has lighting installed, which can help to brighten the space and make it easier to find and grab items stored within. The overall design of the closet is minimalist in nature, with clean lines and a simple color scheme that is meant to blend seamlessly with the surrounding decor. In addition to mirrors and lighting, the closet may feature hooks or shelves for storing jackets, hats, shoes, and other accessories.')
        [
          'en-US'
        ]('An entryway closet with mirrors and lights is a built-in closet that is situated near the entrance of a house or apartment. The closet features full-length mirrors, which are designed to allow people to check their appearance before leaving the house. The closet has lighting installed, which can help to brighten the space and make it easier to find and grab items stored within. The overall design of the closet is minimalist in nature, with clean lines and a simple color scheme that is meant to blend seamlessly with the surrounding decor. In addition to mirrors and lighting, the closet may feature hooks or shelves for storing jackets, hats, shoes, and other accessories.')
        [
          'de-DE'
        ]('Ein Einbauschrank mit Spiegeln und Leuchten wird in der Nähe des Eingangs eines Hauses oder einer Wohnung platziert. Der Schrank verfügt über Ganzkörperspiegel, um Ihnen zu ermöglichen Ihr Aussehen zu überprüfen, bevor sie das Haus verlassen. Der Schrank verfügt über eine Beleuchtung, die dazu beitragen kann, den Raum aufzuhellen und das Auffinden von aufbewahrten Gegenständen zu erleichtern. Das Gesamtdesign des Schranks ist von Natur aus minimalistisch, mit klaren Linien und einem einfachen Farbschema, das sich nahtlos in das umgebende Dekor einfügen soll. Zusätzlich zu Spiegeln und Beleuchtung kann der Schrank Haken oder Regale zum Aufbewahren von Jacken, Hüten, Schuhen und anderen Accessoires aufweisen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('entryway-closet')
        ['de-DE']('eingangsschrank')
        ['en-US']('entryway-closet')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(entrywayClosetProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.entrywayCloset01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
    ]);

export default entrywayCloset;
