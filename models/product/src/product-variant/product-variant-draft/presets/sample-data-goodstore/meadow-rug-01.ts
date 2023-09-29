import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const meadowRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MR-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458764-r6hlYeat.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- 3ft x 5ft',
          'en-US': '- 3ft x 5ft',
          'de-DE': '- 3 Fuß x 5 Fuß',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#b3b1ab', 'de-DE': '#b3b1ab', 'en-US': '#b3b1ab' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gray', 'de-DE': 'Grau', 'en-US': 'Gray' }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          'en-US':
            "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          'de-DE':
            'Ein Plüschteppich ist eine Art von Teppich, der weich und bequem unter den Füßen liegt. Plüschteppiche zeichnen sich durch ihren dichten Flor aus. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Aufgrund ihrer Weichheit und ihres Komforts werden Plüschteppiche häufig in Schlafzimmern, Wohnzimmern und anderen Bereichen verwendet, in denen die Menschen viel Zeit sitzend oder faulenzend auf dem Boden verbringen. Sie sind auch eine beliebte Wahl für Kindergärten und Kinderzimmer, da sie einen sicheren und bequemen Spielbereich für Kinder bieten. Insgesamt ist ein Plüschteppich eine gemütliche und einladende Ergänzung für jedes Zuhause. Seine weiche Textur und sein luxuriöses Gefühl machen ihn zu einer beliebten Wahl für alle, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen wollen.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default meadowRug01;
