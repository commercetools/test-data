import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const purpleMinimalistAbstractPainting01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('PMAP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(2999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(2999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_528254692-mZUzyQP9.jpeg'
        )
        .dimensions({ w: 3148, h: 2903 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Acrylic on canvas\n- 2ft by 2ft',
        'en-US': '- Acrylic on canvas\n- 2ft by 2ft',
        'de-DE': '- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß',
      }),
      AttributeDraft.random().name('product-description').value({
        'de-DE':
          'Ein lilafarbenes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das durch die Verwendung minimaler Elemente und einer begrenzten Farbpalette eine beeindruckende visuelle Wirkung erzielt. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Das Farbschema des Gemäldes ist überwiegend violett, mit wenig bis gar keiner Verwendung anderer Farben. Die Verwendung von Violett in dem Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Geheimnisse darstellen. Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Der minimalistische Charakter des Gemäldes erlaubt es, es nahtlos mit einer Vielzahl von Einrichtungsstilen und Farbschemata zu kombinieren. Insgesamt ist ein lilafarbenes, minimalistisches, abstraktes Gemälde ein raffiniertes und unaufdringliches Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Die einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.',
        'en-GB':
          'A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.',
        'en-US':
          'A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#A020F0',
          label: { 'de-DE': 'Lila', 'en-GB': 'Purple', 'en-US': 'Purple' },
        }),
    ]);

export default purpleMinimalistAbstractPainting01;
