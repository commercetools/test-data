import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailShakerSetVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('COC-0843')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1599))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_441132411-JDwT9QfX.jpeg'
        )
        .dimensions({ w: 4929, h: 5334 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Hand wash only',
        'de-DE': '- Edelstahl\n- Handwäsche nur',
        'en-US': '- Stainless steel\n- Hand wash only',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
        'en-US':
          "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
        'de-DE':
          'Dieses Set für die Cocktailzubereitung umfasst einen Shaker, ein Sieb, einen Jigger und eine Zange, die alle aus vergoldetem Edelstahl bestehen. Der Shaker ist ein zweiteiliger Behälter mit einem Deckel, der fest sitzt, um ein Verschütten zu verhindern. Das Sieb passt über die Oberseite des Shakers, um feste Zutaten oder Eis aus dem Cocktail zu entfernen, wenn er in das Glas gegossen wird. Der Jigger ist ein kleiner Messbecher, der dabei hilft, die Zutaten präzise abzumessen. Das Gold-Finish verleiht dem Set ein luxuriöses, elegantes Aussehen, das sich perfekt für die Unterhaltung oder die Zubereitung besonderer Cocktails zu Hause eignet.',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gold', 'de-DE': 'Gold', 'en-US': 'Gold' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFD700',
          label: { 'de-DE': 'Gold', 'en-GB': 'Gold', 'en-US': 'Gold' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#EED149', 'de-DE': '#EED149', 'en-US': '#EED149' }),
    ]);

export default cocktailShakerSetVariant01;
