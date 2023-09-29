import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sandTeaCup01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('STM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sand%20Tea%20Cup-yM4SUI5o.jpeg'
        )
        .dimensions({ w: 6046, h: 4020 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 mug',
          'en-US': '- Includes 1 mug',
          'de-DE': '- Enthält 1 Tasse',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.',
          'en-US':
            'The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.',
          'de-DE':
            'Die sandfarbene Tasse ist mit ihrer zylindrischen oder leicht konischen Form und einem Fassungsvermögen von etwa 8 bis 16 Unzen das ideale Trinkgefäß für jeden Tee- oder Kaffeeliebhaber.  Der Keramikbecher hat glatte Seiten und eine breite Öffnung, die das Eingießen und den Genuss von Kaffee oder Tee erleichtern.  Der Henkel der Tasse ist so konzipiert, dass er für jede Handgröße angenehm zu greifen ist und bequem in der Hand liegt. Der Boden des Henkeltasse ist flach und stabil, um ein Umkippen und Verschütten zu verhindern.  Die hellbraune Teetasse ist leicht zu reinigen und zu pflegen. Sie kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Tasse ist ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss von Heißgetränken Zuhause oder auf der Arbeit eignet. Die neutrale Farbe und das schlichte Design machen sie zu einer beliebten Wahl für alle Tee- und Kaffeeliebhaber, die einen klassischen und minimalistischen Look bevorzugen.',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Sand', 'de-DE': 'Sand', 'en-US': 'Sand' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFDC94', 'de-DE': '#FFDC94', 'en-US': '#FFDC94' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default sandTeaCup01;
