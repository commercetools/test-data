import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const stoutBeerGlassVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SBG-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(5699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(5699))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(5999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Stout%20Beer%20Glass-fKjG9_Kd.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 6 glasses',
        'de-DE': '- Das Set enthält 6 Gläser',
        'en-US': '- Set includes 6 glasses',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.',
        'en-US':
          'A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.',
        'de-DE':
          'Ein Stout-Bierglas, auch als "Pintglas" bekannt, ist eine Art Trinkglas, das speziell zum Servieren und Genießen von Stout-Bieren entwickelt wurde. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Stout-Bierglases soll das Trinkerlebnis verbessern, indem es die volle Geschmacks- und Aromavielfalt des Bieres zur Geltung bringt. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe und Klarheit des Bieres voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Bier nicht verschüttet oder umkippt.  Insgesamt ist ein Stout-Bierglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma feiner Stout-Biere zu genießen. Sein einfaches, aber elegantes Design macht es zu einer beliebten Wahl für Bierliebhaber und Gelegenheitstrinker gleichermaßen.',
      }),
    ]);

export default stoutBeerGlassVariant01;
