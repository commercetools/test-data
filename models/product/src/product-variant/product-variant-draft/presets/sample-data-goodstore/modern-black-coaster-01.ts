import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernBlackCoaster01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BCOAS-08')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_45118888-JuHg_hZC.jpeg'
        )
        .dimensions({ w: 2912, h: 2912 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_49535431-zEkdS7Vb.jpeg'
        )
        .dimensions({ w: 2912, h: 2912 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Set includes 4 coasters',
          'de-DE': '- Das Set enthält 4 Untersetzer',
          'en-US': '- Set includes 4 coasters',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          'en-US':
            "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          'de-DE':
            'Ein runder schwarzer Untersetzer ist ein kleiner, flacher, scheibenförmiger Gegenstand, der unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Spritzern zu schützen. Der Untersetzer hat eine runde Form und eine solide schwarze Farbe, die ihm ein schlankes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, um dem Glas oder der Tasse einen rutschfesten Halt zu bieten. Die Kanten sind mit Ziernähten versehen, die den ästhetischen Reiz des Untersetzers noch verstärken. Insgesamt ist ein runder schwarzer Untersetzer ein funktionales und stilvolles Accessoire, das sich perfekt für jede Wohn- oder Büroumgebung eignet.',
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

export default modernBlackCoaster01;
