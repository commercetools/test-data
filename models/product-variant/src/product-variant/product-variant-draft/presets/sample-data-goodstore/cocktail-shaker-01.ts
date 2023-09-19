import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailShaker01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('COCT-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(699))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74255917-W96v6fME.jpeg'
        )
        .dimensions({ w: 3850, h: 5500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74620379%20-og0Draq4.jpeg'
        )
        .dimensions({ w: 5000, h: 3750 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Includes built in strainer\n- Stainless steel\n- Dishwasher safe',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.',
        'en-US':
          'A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.',
        'de-DE':
          'Ein Cocktailshaker ist ein Werkzeug, das zum Mischen und Zubereiten von alkoholischen Getränken wie Cocktails verwendet wird. Es ist ein Metallbehälter mit einem Deckel, der dicht abschließt, um ein Verschütten zu verhindern. Der Behälter hat eine sich verjüngende Form mit einer breiteren Basis und einer schmaleren Oberseite. Dieses Design ermöglicht ein einfaches Mischen der Zutaten durch Schütteln. Der Deckel hat ein eingebautes Sieb, um die Flüssigkeit vom Eis und anderen festen Zutaten zu trennen. Der Shaker ist aus Edelstahl.',
      }),
    ]);

export default cocktailShaker01;
