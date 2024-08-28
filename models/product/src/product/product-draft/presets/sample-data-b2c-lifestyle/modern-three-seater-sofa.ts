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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const modernThreeSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theModernist()
  .build<TCategoryDraft>();

const modernThreeSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-three-seater-sofa')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Three Seater Sofa')
        ['de-DE']('Modernes Dreisitzer-Sofa')
        ['en-US']('Modern Three Seater Sofa')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.")
        [
          'de-DE'
        ]('Das Dreisitzer-Sofa im modernen Stil mit Nackenkissen ist ein elegantes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischer Raffinesse verleihen kann. Das Sofa besteht aus einem Holzrahmen, der mit einer weichen und strapazierfähigen Polsterung überzogen ist. Das Design des Sofas zeichnet sich durch klare Linien und einfache Formen aus, mit einem niedrigen Profil, das einen modernen und minimalistischen Look erzeugt. Die Rückenlehne und die Sitzkissen sind mit dem Rahmen verbunden, so dass ein nahtloses und stromlinienförmiges Erscheinungsbild entsteht, das die schlichte Ästhetik des Sofas unterstreicht. Das Sofa ist häufig mit Nackenkissen ausgestattet. Das sind lange, zylindrische Kissen, die als Armlehnen oder zur Unterstützung des unteren Rückens beim Sitzen verwendet werden können. Die Nackenkissen sind mit dem gleichen Bezugsstoff wie der Rest des Sofas bezogen, wodurch ein einheitliches und abgestimmtes Aussehen entsteht. Die vier Beine des Sofas sind aus Holz und haben ein einfaches und schnörkelloses Design, das die moderne Ästhetik des Sofas ergänzt. Die Größe des Sofas als Dreisitzer bietet ausreichend Platz für drei Personen und ist damit die ideale Wahl für ein kleines bis mittelgroßes Wohnzimmer oder ein Familienzimmer. Das Sofa kann mit einer Reihe von Akzentstühlen, Couchtischen und anderen Möbelstücken kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen. Insgesamt ist ein Dreisitzer-Sofa im modernen Stil ein elegantes und anspruchsvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischem Stil verleihen kann. Seine klaren Linien, einfachen Formen und sein minimalistisches Design machen es zu einer vielseitigen und stilvollen Wahl für jedes moderne Zuhause.')
        [
          'en-US'
        ]("A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-three-seater-sofa')
        ['de-DE']('modernes-dreisitzer-sofa')
        ['en-US']('modern-three-seater-sofa')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernThreeSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernThreeSeaterSofa01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(sofasDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(theModernistDraft.key!),
    ]);

export default modernThreeSeaterSofa;
