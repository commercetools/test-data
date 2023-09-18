import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailStirringSpoon01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('Spoo-094')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_138383562-Ewqpr7_V.jpeg'
        )
        .dimensions({ w: 5757, h: 4555 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Stainless steel\n- Dishwasher safe' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.',
        'en-US':
          'A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.',
        'de-DE':
          'Ein Cocktail-Rührlöffel ist ein langes und schlankes Utensil aus Edelstahl, das zum Rühren und Mixen von Cocktails verwendet wird. Es ist normalerweise etwa 8 Zoll lang mit einem kleinen, flachen, scheibenförmigen Ende zum Vermischen von Zutaten und einem gedrehten oder spiralförmigen Griff zum einfachen Greifen. Der gedrehte Griff dient nicht nur der Dekoration, sondern verhilft auch zu einem besseren Halt beim Mixen von Cocktails.',
      }),
    ]);

export default cocktailStirringSpoon01;
