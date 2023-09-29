import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const tanQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LPQB-084')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Tan%20Twin%20Bed-Og9KvV6W.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'en-US': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.',
        'en-US':
          'A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.',
        'de-DE':
          'Das Queensize-Bett mit gepolstertem Kopfteil aus Leder ist ein stilvolles und raffiniertes Möbelstück. Das Kopfteil ist hoch und breit und bietet ein gepolstertes Design mit luxuriösem Lederbezug, das es zu einen bequemen Platz zum Anlehnen im Bett macht. Das Leder ist weich und geschmeidig und verleiht dem Bett einen Hauch von Eleganz und Raffinesse.  Das Bettgestell besteht aus stabilem Holz und ist in passender Farbe zum Lederkopfteil gehalten. Das Bett hat einen Lattenrost, der eine solide Grundlage für die Matratze bietet und dem Komfort eines Boxspringbetts gleichkommt.  Diese Art von Bett wird oft in zeitgenössischen oder Übergangsdesignstilen bevorzugt und kann mit einer Reihe von Betttextilien und Dekorationsartikeln kombiniert werden, um einen luxuriösen und einladenden Schlafbereich zu schaffen. Ein Queensize-Bett mit einem gepolsterten Kopfteil aus Leder ist ein Statement-Stück, das jedem Schlafzimmer sowohl Komfort als auch Stil verleiht.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Tan', 'de-DE': 'Bräunen', 'en-US': 'Tan' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#503A01', 'de-DE': '#503A01', 'en-US': '#503A01' }),
      AttributeDraft.random().name('finishlabel').value({
        'en-GB': 'Briarsmoke',
        'de-DE': 'Briarsmoke',
        'en-US': 'Briarsmoke',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#5B523C', 'en-US': '#5B523C', 'de-DE': '#5B523C' }),
    ]);

export default tanQueenBed01;
