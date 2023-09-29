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

const modernGlamDresserProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
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

const modernGlamDresser = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-glam-dresser')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Modern Glam Dresser')
        ['de-DE']('Moderne glamouröse Kommode')
        ['en-US']('Modern Glam Dresser')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.'
        )
        ['de-DE'](
          'Eine moderne glamouröse Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Sie zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Finish aus, wodurch ein schickes und anspruchsvolles Aussehen entsteht, das jedem Schlafzimmer einen Hauch von Luxus verleiht. Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und lassen sich leicht öffnen und schließen und bieten reichlich Stauraum für Kleidung, Accessoires und andere Gegenstände. Die Kommode verfügt außerdem über glamouröse Metallgriffe, die dem Möbelstück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlank und minimalistisch, mit einem Schwerpunkt auf klaren Linien und einfachen Formen. Eine moderne, glamouröse Kommode ist eine schöne Ergänzung für jedes Schlafzimmer und verleiht dem Raum einen Hauch von Luxus und Raffinesse. Die klaren Linien, die metallischen Oberflächen und die glamourösen Akzente sorgen für einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann.'
        )
        ['en-US'](
          'A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('modern-glam-dresser')
        ['de-DE']('moderne-glamourse-kommode')
        ['en-US']('modern-glam-dresser')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernGlamDresserProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.modernGlamDresser01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(theModernistDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default modernGlamDresser;
