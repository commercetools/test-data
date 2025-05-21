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

const modernBookcaseProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theModernist()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dressers()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const modernBookcase = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('modern-bookcase')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Bookcase')
        ['de-DE']('Modernes Bücherregal')
        ['en-US']('Modern Bookcase')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.')
        [
          'de-DE'
        ]('Dieses moderne Bücherregal hat ein einfaches und elegantes Design, das sich gut in die moderne Einrichtung einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz gefertigt und mahagonifarben lackiert. Die offenen und geräumigen Regalböden bieten reichlich Platz zum Aufbewahren und Ausstellen von Büchern, Dekorationsobjekten und anderen Gegenständen. Ein minimalistisches Bücherregal erfüllt nicht nur einen funktionalen Zweck, sondern dient auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Daher ist es eine ausgezeichnete Wahl für alle, die eine stilvolle, aber unauffällige Aufbewahrungslösung suchen.')
        [
          'en-US'
        ]('This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-bookcase')
        ['de-DE']('modernes-bcherregal')
        ['en-US']('modern-bookcase')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernBookcaseProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernBookcase01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(theModernistDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default modernBookcase;
