import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const indoorJutePlanter02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('IJP-04')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_446433445-GNpBuLn-.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Plant not included',
          'en-US': '- Plant not included',
          'de-DE': '- Plant not included',
        }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'Small' }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.',
          'en-US':
            'An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.',
          'de-DE':
            'Ein Indoor-Jute-Pflanzgefäß für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Grün in Ihrem Zuhause zu präsentieren. Das Pflanzgefäß besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind.  Die neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen.  Die Jutefasern des Pflanzgefäßes sind saugfähig und ermöglichen eine ordnungsgemäße Drainage und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten.  Insgesamt ist ein Jute-Pflanzgefäß für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig den Planeten zu schonen.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#000',
          label: { 'de-DE': 'Schwarz', 'en-GB': 'Black', 'en-US': 'Black' },
        }),
    ]);

export default indoorJutePlanter02;
