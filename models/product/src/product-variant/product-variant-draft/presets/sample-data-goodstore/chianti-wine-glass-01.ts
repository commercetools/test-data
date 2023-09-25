import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const chiantiWineGlass01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CWG-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(2599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(2599))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Chianti%20Wine%20Glass-8NCMaZ_L.jpeg'
        )
        .dimensions({ w: 2457, h: 3138 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Set includes 6 glasses',
          'de-DE': '- Das Set enthält 6 Gläser',
          'en-US': '- Set includes 6 glasses',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.',
          'en-US':
            'The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.',
          'de-DE':
            'Das Chianti-Weinglas wurde speziell entwickelt, um das Erlebnis beim Trinken von Rotwein zu verbessern. Es hat einen runden oder leicht konisch zulaufenden Kelch, der größer ist als der eines Weißweinglases, wodurch der Wein atmen und sein volles Aroma und seinen vollen Geschmack entfalten kann.  Der Kelch eines Rotweinglases ist unten breiter und verjüngt sich leicht nach oben, wodurch die Aromen des Weins konzentriert und zur Nase geleitet werden. Der Stiel des Glases ist typischerweise lang und schlank, sodass der Trinker das Glas halten kann, ohne den Wein mit seiner Körperwärme zu erwärmen.  Insgesamt ist ein Rotweinglas ein stilvolles und funktionales Glasgeschirr, das speziell entwickelt wurde, um den Geschmack und das Aroma von Rotwein zu verbessern. Sein elegantes Design und die Liebe zum Detail machen ihn zu einer beliebten Wahl für Weinliebhaber und Gelegenheitstrinker gleichermaßen.',
        }),
    ]);

export default chiantiWineGlass01;
