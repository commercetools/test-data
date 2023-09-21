import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const opalKingBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MTB-023')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Opal%20King%20Bed%20(1)-ijN8T8rE.jpeg'
        )
        .dimensions({ w: 2000, h: 2000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Assembly included',
          'de-DE': '- Montage inklusive',
          'en-US': '- Assembly included',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.',
          'en-US':
            'A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.',
          'de-DE':
            'Ein modernes Kingsize-Bett mit getuftetem Kopfteil ist ein stilvolles und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Luxus und Raffinesse verleihen kann. Die Matratzenplattform ist groß genug, um eine Kingsize-Matratze aufzunehmen, und das gesamte Bett ist mit klaren, schlanken Linien gestaltet, die ihm ein modernes Aussehen verleihen.  Das getuftete Kopfteil ist das Herzstück des Bettes und oft der auffälligste Blickfang. Es besteht aus weichem, strapazierfähigem Stoff, der in einem quadratischen Muster getuftet ist. Das getuftete Design verleiht dem Kopfteil ein weiches, gepolstertes Aussehen und macht es bequem, im Bett zu sitzen, um zu lesen oder fernzusehen.  Das Gesamtdesign des Bettes ist modern und betont die Schönheit des getufteten Kopfteils.  Insgesamt ist ein modernes Kingsize-Bett mit getuftetem Kopfteil ein Statement-Stück, das jedem Schlafzimmer sowohl Stil als auch Komfort verleihen kann.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#000', 'de-DE': '#000', 'en-US': '#000' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Black', 'de-DE': 'Schwarz', 'en-US': 'Black' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#000',
          label: { 'de-DE': 'Schwarz', 'en-GB': 'Black', 'en-US': 'Black' },
        }),
    ]);

export default opalKingBed01;
