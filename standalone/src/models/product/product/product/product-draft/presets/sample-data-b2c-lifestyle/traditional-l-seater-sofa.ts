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

const traditionalLSeaterSofaProductTypeDraft =
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

const theTraditionalistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theTraditionalist()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const traditionalLSeaterSofa = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('traditional-l-seater-sofa')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Traditional L Seater Sofa')
        ['en-GB']('Traditional L Seater Sofa')
        ['de-DE']('Traditionelles Ecksofa')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.')
        [
          'de-DE'
        ]('Das traditionelle Ecksofa ist ein bequemes und praktisches Möbelstück. Das Sofa ist mit einem strapazierfähigen und hochwertigen Baumwollstoff bezogen und überzeugt mit einem klassischen und zeitlosen Design, das gut zu einer Vielzahl von Einrichtungsstilen passt.  Das Sofa bietet ausreichend Platz und Komfort für mehrere Personen. Es kann wie eine Chaiselongue genutzt werden und bietet einen Platz zum Ausstrecken und Entspannen. Das L-förmige Design des Sofas maximiert den Sitzplatz und bietet gleichzeitig einen komfortablen und einladenden Ort zum Entspannen und Erholen.  Das Sofa ist mit gepolsterten Armlehnen und Rückenlehnen ausgestattet, die dem Sitzenden ausreichend Halt und Komfort bieten. Die Kissen bestehen aus hochdichtem Schaumstoff, der die Form hält und das gute Sitzgefühl wahrt. Das Sofa wird darüber hinaus mit passenden Wurfkissen geliefert, die den Komfort und Stil des Sofas weiter unterstützen.  Das traditionelle L-förmiges Sofa ist ein bequemes und praktisches Möbelstück, das jedem Wohnzimmer sowohl Stil als auch Funktionalität verleiht. Sein klassisches und zeitloses Design, die bequemen Kissen und die großzügige Sitzfläche machen es zu einer beliebten Wahl für Familien und alle, die gerne Gäste in ihrem Zuhause zu empfangen.')
        [
          'en-GB'
        ]('A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('traditional-l-seater-sofa')
        ['en-GB']('traditional-l-seater-sofa')
        ['de-DE']('traditionelles-l-sitzer-sofa')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(traditionalLSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.traditionalLSeaterSofa01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(sofasDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(theTraditionalistDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
    ]);

export default traditionalLSeaterSofa;
