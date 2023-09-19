import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const orionDoubleBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('OTB-07')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Orion%20Twin%20Bed-t5ZMuQok.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included at delivery\n- Mattress not included',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.',
        'en-US':
          'A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.',
        'de-DE':
          'Ein Queensize-Bett mit getuftetem Kopfteil und Plattform sowie Stahlbeinen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und hat ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet.  Das Bett wird vom Boden auf einer Plattform angehoben, die von schlanken und robusten Stahlbeinen getragen wird. Die Plattform bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig ein sauberes und minimalistisches Aussehen.  Insgesamt ist dieses Queensize-Bett ein schönes und funktionales Stück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet.',
      }),
      AttributeDraft.random().name('colorlabel').value({ 'en-GB': 'Sage' }),
      AttributeDraft.random().name('color').value({ 'en-GB': '#718C86' }),
      AttributeDraft.random().name('finishlabel').value({ 'en-GB': 'Steel' }),
      AttributeDraft.random().name('finish').value({ 'en-GB': '#CCCCCC ' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default orionDoubleBed01;
