import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonTwoSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CTSS-0983')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(54900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(54900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(54900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_225174101-6XExeL2D.jpeg'
        )
        .dimensions({ w: 5035, h: 2969 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_202436963-ZB2HxGeB.jpeg'
        )
        .dimensions({ w: 1000, h: 637 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377510554-dyXzuIQC.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            "The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room.",
          'en-US':
            "The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room.",
          'de-DE':
            'Das 2-Sitzer-Baumwollsofa ist eine gemütliche und bequeme Sitzgelegenheit für jedes Zuhause. Aus weichem, hochwertigem Baumwollstoff gefertigt, ist dieses Sofa sanft zur Haut und pflegeleicht. Die beiden Sitzkissen sind weich und stützend und bieten ein komfortables Sitzerlebnis. Die Rückenlehne des Sofas ist gut gepolstert und bietet reichlich Rückenunterstützung, während die Armlehnen für ein bequemes und entspanntes Gefühl sanft abgerundet sind. Der Holzrahmen des Sofas ist robust und langlebig, sodass er viele Jahre hält. Mit einer neutralen Farbe fügt sich dieses Sofa nahtlos in jeden Einrichtungsstil ein, während das schlichte und elegante Design jedem Raum einen Hauch von Raffinesse verleiht.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default cottonTwoSeaterSofa01;
