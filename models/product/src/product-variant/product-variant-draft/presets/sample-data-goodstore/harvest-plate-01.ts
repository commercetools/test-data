import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const harvestPlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('HP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1399))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harvest%20Plate-o05bpPh9.jpeg'
        )
        .dimensions({ w: 4421, h: 3812 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 plate',
          'en-US': '- Includes 1 plate',
          'de-DE': '- Enthält 1 Teller',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.',
          'en-US':
            'This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.',
          'de-DE':
            'Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Gerichte verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren. Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass.',
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

export default harvestPlate01;
