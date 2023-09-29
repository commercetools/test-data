import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const silkyPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SPC-06')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Silky%20Pillow%20Cover-rFuCgbHa.jpeg'
        )
        .dimensions({ w: 6016, h: 4011 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Pillow not included',
          'en-US': '- Pillow not included',
          'de-DE': '- Kissen nicht im Lieferumfang enthalten',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.',
          'en-US':
            'A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.',
          'de-DE':
            'Der Seidenbezug ist ein luxuriöser und weicher Kissenbezug aus natürlichen Seidenfasern. Seide ist eine natürliche Proteinfaser, die von bestimmten Insektenlarven, einschließlich der Seidenraupe, produziert wird. Die Fasern sind für ihre Weichheit, Geschmeidigkeit und ihren natürlichen Glanz bekannt und verleihen Seidenkissenbezügen ihr luxuriöses und elegantes Aussehen und Gefühl.  Seidenkissenbezüge sind bekannt für die vielen Vorteile für Haut und Haar. Die glatte Textur von Seide trägt dazu bei, Reibung und Irritationen auf der Haut zu reduzieren und das Risiko von Falten und feinen Linien zu verringern. Sie hilft auch dabei, Haarbruch und Frizz zu verhindern, wodurch das Haar glatter und geschmeidiger aussieht.  Kissenbezüge aus Seide erfordern besondere Pflege, da sie empfindlich sind und leicht durch scharfe Reinigungsmittel oder grobe Behandlung beschädigt werden können. Sie sollten von Hand oder im Schonwaschgang mit Feinwaschmittel gewaschen und liegend getrocknet oder zum Trocknen aufgehängt werden.  Ein Kissenbezug aus Seide ist eine luxuriöse und elegante Wahl für jedes Schlafzimmer. Seine vielen Vorteile für Haut und Haar sowie seine weiche und glatte Textur machen es zu einer beliebten Wahl für diejenigen, die ein komfortables und verwöhnendes Schlaferlebnis suchen.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#C0C0C0',
          label: { 'de-DE': 'Silber', 'en-GB': 'Silver', 'en-US': 'Silver' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#8B9299', 'de-DE': '#8B9299', 'en-US': '#8B9299' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Steel', 'de-DE': 'Stahl', 'en-US': 'Steel' }),
    ]);

export default silkyPillowCover01;
