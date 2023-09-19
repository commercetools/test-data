import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const wilmaChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NJOP-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Wilma%20Chair-CXpAOu8I.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_547299128-yG__9MPQ.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Cushion covers are removable and machine washable',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.',
        'en-US':
          'A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.',
        'de-DE':
          'Ein getufteter armloser Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne mit getufteten Details für zusätzlichen Komfort und Stil. Dem Stuhl fehlen Armlehnen, um mehr Flexibilität und Benutzerfreundlichkeit zu ermöglichen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Insgesamt ist ein getufteter Futonstuhl ohne Armlehnen ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. in einem Wohnzimmer, Schlafzimmer oder Heimbüro.',
      }),
      AttributeDraft.random().name('colorlabel').value({ 'en-GB': 'Cream' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Black Iron' }),
      AttributeDraft.random().name('finish').value({ 'en-GB': '#000' }),
      AttributeDraft.random().name('color').value({ 'en-GB': '#E4DCC1' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFFFF0',
          label: { 'de-DE': 'Elfenbein', 'en-GB': 'Ivory', 'en-US': 'Ivory' },
        }),
    ]);

export default wilmaChair01;
