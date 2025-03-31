import {
  CategoryDraft,
  TCategoryDraft,
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
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const sweetPeaCandleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const sweetPeaCandle = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('sweet-pea-candle')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sweet Pea Candle')
        ['en-GB']('Sweet Pea Candle')
        ['de-DE']('Kerze Duftwicke')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.')
        [
          'de-DE'
        ]('Die kleine Kerze mit der Duftnote Schleierkraut oder Duftwicke ist eine charmante und hübsche Ergänzung für jedes Zuhause. Die Größe der Kerze macht sie zum perfekten Accessoire auf einem Tisch oder Schreibtisch.  Die Kerze besteht aus hochwertigem Wachs, das mit den süßen und zarten Noten der Duftwicke durchdrungen ist. Der Duft ist frisch und blumig und erinnert an einen blühenden Garten im Frühling.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze eine dekorative Note verleiht.  Wenn die Kerze angezündet wird, verströmt sie ein sanftes und angenehmes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Schleierkraut. Der Duft schafft eine entspannende und beruhigende Atmosphäre und eignen sich gut für die Verwendung während einer Yogastunde, eines Schaumbads oder zur Einstimmung in einen erholsamen Schlaf.  Eine Kerze mit dem Aroma der Duftwicke ist eine hübsche und charmante Ergänzung für jedes Zuhause und bringt einen Hauch von Natur und Ruhe in jeden Wohnraum.')
        [
          'en-GB'
        ]('A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('sweat-pea-candle')
        ['en-GB']('sweat-pea-candle')
        ['de-DE']('kerze-der-sen-erbse')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(sweetPeaCandleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.sweetPeaCandle01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default sweetPeaCandle;
