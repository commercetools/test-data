import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const crystalDrinkingGlass01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CDG-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(3499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(3499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(3499))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Crystal%20Drinking%20Gla-8ynxF_aM.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Set includes 6 glasses',
          'en-US': '- Set includes 6 glasses',
          'de-DE': '- Set enthält 6 Gläser',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.',
          'en-US':
            'This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.',
          'de-DE':
            'Dieses Kristall-Glas besteht aus hochwertigem, bleifreiem Kristallglas, das dünn und zart, aber dennoch stark und langlebig ist. Das hochwertige Kristallmaterial wertet das Trinkerlebnis auf und lässt die Getränke funkelnder und farbenfroher erscheinen. Das Glas ist zudem so designed, dass es auch das Aroma und den Geschmack des Getränks verbessert. Das Design des Glases soll die Zugabe von Eis, Soda oder anderen Mixern ermöglichen und dennoch viel Platz für das Getränk selbst lassen. Die weite Öffnung des Glases lässt das Aroma des Getränkes aufsteigen, während die geraden Seiten und die glatte Oberfläche das Trinken und Genießen erleichtern.  Dieses Kristall-Glas ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist dieses Glas aus Kristall ein stilvolles und elegantes Glasgeschirr, das sich perfekt zum Servieren von großen Mixgetränken eignet. Sein zartes Kristallmaterial und sein kompliziertes Design machen es zu einer beliebten Wahl für besondere Anlässe und gehobene Speiseerlebnisse.',
        }),
    ]);

export default crystalDrinkingGlass01;
