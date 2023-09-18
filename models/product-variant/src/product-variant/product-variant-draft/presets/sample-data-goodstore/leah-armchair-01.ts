import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const leahArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LAMR-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Leah%20Armchair-fC9tzaOt.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Dry clean only' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.',
        'en-US':
          'A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.',
        'de-DE':
          'Ein getufteter Sessel mit Messingbeinen ist ein elegantes und luxuriöses Möbelstück. Der Stuhl verfügt typischerweise über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem und plüschigem Material bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Messingbeine einen Hauch von Glamour und Raffinesse verleihen. Die Beine verleihen dem Stuhl ein elegantes und modernes Aussehen. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random().name('color').value({ 'en-GB': '#AAAAAA' }),
      AttributeDraft.random().name('colorlabel').value({ 'en-GB': 'Gray' }),
      AttributeDraft.random().name('finishlabel').value({ 'en-GB': 'Brass' }),
      AttributeDraft.random().name('finish').value({ 'en-GB': '#E9C55A' }),
    ]);

export default leahArmchair01;
