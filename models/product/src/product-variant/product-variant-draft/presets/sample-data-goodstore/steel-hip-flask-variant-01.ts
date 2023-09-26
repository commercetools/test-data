import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const steelHipFlaskVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('FLAS-094')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(599))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_326959618-xikecS3x.jpeg'
        )
        .dimensions({ w: 5006, h: 6580 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel',
        'de-DE': '- Edelstahl',
        'en-US': '- Stainless steel',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.',
        'en-US':
          'A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.',
        'de-DE':
          'Ein Flachmann aus Stahl ist ein kleiner, gebogener und flacher Behälter aus Edelstahl. Es ist so konzipiert, dass es eine kleine Menge alkoholischer Getränke aufnehmen und transportieren kann, normalerweise etwa 6 bis 10 Unzen. Die Flasche hat einen Scharnier- oder Schraubdeckel, der ein einfaches Öffnen und Schließen ermöglicht, sowie eine kleine Öffnung zum Ausgießen oder Trinken des Inhalts. Die Außenseite des Kolbens ist glatt. Flachmänner werden oft in einer Tasche oder Handtasche für den diskreten Konsum von Alkohol unterwegs getragen.',
      }),
    ]);

export default steelHipFlaskVariant01;
