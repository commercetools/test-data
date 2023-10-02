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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const modernBookcaseProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theModernist()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .dressers()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const modernBookcase = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-bookcase')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Modern Bookcase')
        ['de-DE']('Modernes Bücherregal')
        ['en-US']('Modern Bookcase')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.'
        )
        ['de-DE'](
          'Dieses moderne Bücherregal hat ein einfaches und elegantes Design, das sich gut in die moderne Einrichtung einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz gefertigt und mahagonifarben lackiert. Die offenen und geräumigen Regalböden bieten reichlich Platz zum Aufbewahren und Ausstellen von Büchern, Dekorationsobjekten und anderen Gegenständen. Ein minimalistisches Bücherregal erfüllt nicht nur einen funktionalen Zweck, sondern dient auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Daher ist es eine ausgezeichnete Wahl für alle, die eine stilvolle, aber unauffällige Aufbewahrungslösung suchen.'
        )
        ['en-US'](
          'This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('modern-bookcase')
        ['de-DE']('modernes-bcherregal')
        ['en-US']('modern-bookcase')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernBookcaseProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.modernBookcase01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(theModernistDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default modernBookcase;
