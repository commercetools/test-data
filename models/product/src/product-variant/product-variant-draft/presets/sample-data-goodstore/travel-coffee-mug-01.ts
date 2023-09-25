import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const travelCoffeeMug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TCM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(499))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Travel%20Coffee%20Mug-EGwE68-i.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Insulated \n- Suitable for both cold and hot drinks',
          'de-DE':
            '- Isoliert\n- Sowohl für kalte als auch heiße Getränke geeignet',
          'en-US': '- Insulated \n- Suitable for both cold and hot drinks',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.',
          'en-US':
            'The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.',
          'de-DE':
            'Der Travel Coffee Mug ist für unterwegs konzipiert. Der Becher hat ein Fassungsvermögen von etwa 12 bis 20 Unzen und ist so konzipiert, dass er Getränke über einen längeren Zeitraum heiß oder kalt hält. Dies wird durch die Verwendung einer Isolierung erreicht, die dazu beiträgt, die Temperatur des Getränks im Inneren des Bechers aufrechtzuerhalten.  Der Travel Coffee Mug hat eine Vielzahl von Funktionen, darunter einen auslaufsicheren Deckel, der sicher befestigt werden kann, um ein Auslaufen oder Verschütten zu verhindern, und einen Griff oder Griff, der das Halten erleichtert, auch beim Gehen oder Fahren.  Dieser Reisekaffeebecher ist so konzipiert, dass er in Standard-Getränkehalter in Autos passt.  Insgesamt ist dieser Reisekaffeebecher ein praktisches und praktisches Trinkgefäß, das sich ideal für alle eignet, die unterwegs ein heißes oder kaltes Getränk genießen. Seine robuste Konstruktion und sein isoliertes Design machen ihn zu einer beliebten Wahl für Pendler, Reisende und Outdoor-Enthusiasten.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
    ]);

export default travelCoffeeMug01;
