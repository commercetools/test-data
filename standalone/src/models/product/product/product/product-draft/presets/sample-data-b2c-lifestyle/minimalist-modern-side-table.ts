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

const minimalistModernSideTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const theMinimalistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theMinimalist()
  .build<TCategoryDraft>();

const minimalistModernSideTable = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('minimalist-modern-side-table')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Minimalist Modern Side Table')
        ['de-DE']('Minimalistischer Moderner Beistelltisch')
        ['en-US']('Minimalist Modern Side Table')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.")
        [
          'de-DE'
        ]('Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ist ein einfaches und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgenössischer Eleganz verleihen kann. Der Tisch hat eine runde oder kreisförmige Platte aus Holz. Die Tischplatte wird von vier leicht schräg gestellten, konischen Beinen getragen, die dem Tisch einen einzigartigen und modernen Look verleihen. Die Beine sind aus Holz gefertigt. Das minimalistische Design des Beistelltischs unterstreicht die Schlichtheit und Funktionalität, mit einem klaren und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zu einer idealen Wahl für kleine Wohnräume oder als Akzent in einem größeren Raum. Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablagefläche für Getränke, Snacks oder Bücher genutzt werden. Durch sein schlichtes und unaufdringliches Design fügt er sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal. Insgesamt ist der minimalistische Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design in Kombination mit seinen funktionalen Eigenschaften machen ihn zu einer praktischen und stilvollen Wahl für jedes Zuhause.')
        [
          'en-US'
        ]("A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('minimalist-modern-side-table')
        ['de-DE']('minimalistischer-moderner-beistelltisch')
        ['en-US']('minimalist-modern-side-table')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(minimalistModernSideTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.minimalistModernSideTable01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataB2CLifestyle.minimalistModernSideTable02(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(tablesDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(theMinimalistDraft.key!),
    ]);

export default minimalistModernSideTable;
