import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const walnutCounterStool01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('WCSI-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(8999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(8999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(8999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Walnut%20Counter%20Stool-z5z1HoAa.jpeg'
        )
        .dimensions({ w: 5906, h: 5906 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 stool',
        'en-US': '- Includes 1 stool',
        'de-DE': '- Beinhaltet 1 Hocker',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.',
        'de-DE':
          'Der Barhocker ist aus Nussbaumholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker hat ein schlichtes Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend designt. Das Nussbaumholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Sitzfläche. Der Barocker aus Nussbaumholz ist ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Wohnräumen verwendet werden kann.',
        'en-US':
          'The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#964B00',
          label: {
            'de-DE': 'Dunkelbraun',
            'en-GB': 'Dark Brown',
            'en-US': 'Dark Brown',
          },
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Walnut', 'de-DE': 'Nussbaum', 'en-US': 'Walnut' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#75412E', 'en-US': '#75412E', 'de-DE': '#75412E' }),
    ]);

export default walnutCounterStool01;
