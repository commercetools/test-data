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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const artDecoCoffeeTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .tables()
  .build<TCategoryDraft>();

const artDecoCoffeeTable = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('art-deco-coffee-table')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Art Deco Coffee Table')
        ['en-GB']('Art Deco Coffee Table')
        ['de-DE']('Couchtisch im Art-Deco-Stil')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.')
        [
          'en-US'
        ]('An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.')
        [
          'de-DE'
        ]('Dieser Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer einen Hauch von Glamour verleihen kann. Der Tisch verfügt über ein geometrisches Design mit schlanken und eckigen Linien, die charakteristisch für den Art-Deco-Stil sind. Die Beine des Tisches sind aus Metall gefertigt und haben eine glänzende Goldoberfläche, die dem Design einen Hauch von Opulenz verleiht. Die Tischplatte besteht aus schwarzem Marmor, der ein natürliches geädertes Muster aufweist, das jedem Stück ein einzigartiges und luxuriöses Aussehen verleiht. Die Marmorplatte ist glatt und poliert und schafft eine glatte und raffinierte Oberfläche für die Präsentation von Büchern, Getränken oder dekorativen Accessoires.  Die Kombination aus Gold und Schwarz schafft einen auffälligen Kontrast, der sowohl mutig als auch elegant ist. Der Art-Deco-Stil des Tisches ist sowohl zeitlos als auch glamourös, was ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen macht, von zeitgenössisch bis hin zu Vintage-inspiriert. Ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist eine luxuriöse und stilvolle Ergänzung für jedes Wohnzimmer. Sein einzigartiges und markantes Design, kombiniert mit seinen hochwertigen Materialien und seiner Handwerkskunst, machen es zu einem herausragenden Möbelstück, das das Erscheinungsbild jedes Raums aufwerten kann.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('art-deco-coffe-table')
        ['en-GB']('art-deco-coffe-table')
        ['de-DE']('art-deco-couchtisch')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(artDecoCoffeeTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.artDecoCoffeeTable01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(tablesDraft.key!),
    ]);

export default artDecoCoffeeTable;
