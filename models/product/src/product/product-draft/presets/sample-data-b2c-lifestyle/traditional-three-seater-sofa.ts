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

const traditionalThreeSeaterSofaProductTypeDraft =
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

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const theTraditionalistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theTraditionalist()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const traditionalThreeSeaterSofa = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('traditional-three-seater-sofa')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Traditional Three Seater Sofa')
        ['en-GB']('Traditional Three Seater Sofa')
        ['de-DE']('Traditionelles Dreisitzer-Sofa')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.')
        [
          'de-DE'
        ]('Das traditionelle Dreisitzer-Sofa ist ein klassisches und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Raffinesse verleiht. Das Sofa ist mit einem robusten Holzrahmen konzipiert, der auf Langlebigkeit und Stabilität ausgelegt ist und sicherstellt, dass das Sofa einer regelmäßigen Nutzung im Laufe der Zeit standhält.  Das Sofa ist mit einem smaragdfarbenem Stoff bezogen - ein wahrer Hingucker in jedem Raum. Der Stoff fühlt sich weich und angenehm an, sodass dem stilvollen Entspannen nichts mehr im Wege steht. Das Sofa ist mit zwei großen Kissen ausgestattet, die mit hochwertigem Schaumstoffmaterial gefüllt sind und bei längerem Sitzen hervorragenden Halt und Komfort bieten. Die Rückenlehne und die Armlehnen des Sofas sind mit einem weichen und plüschigen Material gefüllt, sodass Sie nach einem langen Tag in das Sofa sinken und sich entspannen können.  Das traditionelle Dreisitzer-Sofa ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von klassisch und traditionell bis hin zu modern. Es kann mit einer Vielzahl von dekorativen Akzenten wie Kissen, Überwürfen und Teppichen kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Das traditionelle Dreisitzer-Sofa aus smaragdgrünem Stoff ist ein zeitloses und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich sowohl Komfort als auch Stil verleiht. Sein klassisches Design, die hochwertigen Materialien und seine Funktionalität machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause.')
        [
          'en-GB'
        ]('A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('traditional-three-seater-sofa')
        ['en-GB']('traditional-three-seater-sofa')
        ['de-DE']('traditionelles-dreisitzer-sofa')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(traditionalThreeSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.traditionalThreeSeaterSofa01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(sofasDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(theTraditionalistDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
    ]);

export default traditionalThreeSeaterSofa;
