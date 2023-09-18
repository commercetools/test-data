import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const braidedRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BR-0983')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(9999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(9999))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_537776956-1e2PLfaO.jpeg'
        )
        .dimensions({ w: 4924, h: 4720 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_360665229-HQRPJYSH.jpeg'
        )
        .dimensions({ w: 5060, h: 3373 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_530306642-YZizGX81.jpeg'
        )
        .dimensions({ w: 5527, h: 3685 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.',
        'en-US':
          'A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.',
        'de-DE':
          'Ein geflochtener runder Juteteppich für das Wohnzimmer ist ein stilvolles und natürliches Wohnaccessoire, das jedem Raum Wärme und Struktur verleiht. Der Teppich besteht aus strapazierfähigen und nachhaltigen Jutefasern, die zu einer runden Form zusammengeflochten sind.  Die geflochtene Konstruktion des Teppichs erzeugt eine strukturierte Oberfläche, die sowohl weich als auch strapazierfähig ist. Die Naturfasern der Jute verleihen dem Teppich ein warmes und erdiges Aussehen und machen ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu rustikal und unkonventionell.  Die runde Form des Teppichs ist ideal, um einen gemütlichen und intimen Sitzbereich in einem größeren Wohnzimmer zu schaffen oder um einem kleineren Raum visuelles Interesse zu verleihen.  Insgesamt ist ein geflochtener runder Juteteppich eine stilvolle und natürliche Möglichkeit, einem Wohnzimmer Wärme und Textur zu verleihen. Seine langlebige und nachhaltige Konstruktion, kombiniert mit seinem warmen und erdigen Aussehen, machen es zu einem vielseitigen und zeitlosen Wohnaccessoire, an dem Sie jahrelang Freude haben werden.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random().name('color').value({ 'en-GB': '#FFEEB2' }),
      AttributeDraft.random().name('colorlabel').value({ 'en-GB': 'Jute' }),
    ]);

export default braidedRug01;
