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

const modernGlamDresserProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
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

const modernGlamDresser = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('modern-glam-dresser')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Glam Dresser')
        ['de-DE']('Moderne glamouröse Kommode')
        ['en-US']('Modern Glam Dresser')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.')
        [
          'de-DE'
        ]('Eine moderne glamouröse Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Sie zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Finish aus, wodurch ein schickes und anspruchsvolles Aussehen entsteht, das jedem Schlafzimmer einen Hauch von Luxus verleiht. Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und lassen sich leicht öffnen und schließen und bieten reichlich Stauraum für Kleidung, Accessoires und andere Gegenstände. Die Kommode verfügt außerdem über glamouröse Metallgriffe, die dem Möbelstück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlank und minimalistisch, mit einem Schwerpunkt auf klaren Linien und einfachen Formen. Eine moderne, glamouröse Kommode ist eine schöne Ergänzung für jedes Schlafzimmer und verleiht dem Raum einen Hauch von Luxus und Raffinesse. Die klaren Linien, die metallischen Oberflächen und die glamourösen Akzente sorgen für einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann.')
        [
          'en-US'
        ]('A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-glam-dresser')
        ['de-DE']('moderne-glamourse-kommode')
        ['en-US']('modern-glam-dresser')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernGlamDresserProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernGlamDresser01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(theModernistDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default modernGlamDresser;
