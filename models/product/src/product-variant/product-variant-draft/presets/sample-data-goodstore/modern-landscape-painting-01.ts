import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernLandscapePainting01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MLP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(5299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(5299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(5299))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_211960511-0vrLfA3X.jpeg'
        )
        .dimensions({ w: 5313, h: 5355 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Oil on canvas\n- Frame not included\n- 3ft by 4ft',
        'en-US': '- Oil on canvas\n- Frame not included\n- 3ft by 4ft',
        'de-DE':
          '- Öl auf Leinwand\n- Rahmen nicht im Lieferumfang enthalten\n- 3 Fuß mal 4 Fuß',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.',
        'en-US':
          'A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.',
        'de-DE':
          'Ein modernes kubistisches Landschaftsgemälde ist ein eindrucksvolles und dynamisches Kunstwerk, das Elemente der traditionellen Landschaftsmalerei mit dem gebrochenen und abstrakten Stil des Kubismus verbindet. Das Gemälde wurde mit Ölfarben auf Leinwand gemalt und weist eine Reihe kräftiger Farben und geometrischer Formen auf. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung darstellt. Die Szene ist jedoch fragmentiert und abstrahiert, mit sich überlagernden Farbflächen und geometrischen Formen, die die Landschaft verzerren und zerbrechen. Die Farbgebung des Gemäldes ist lebhaft und kräftig, mit starken Kontrasten zwischen hellen und dunklen Bereichen. Der Künstler hat möglicherweise eine Reihe von Techniken angewandt, wie z. B. Schichtung, Überblendung oder Tupfen, um ein dynamisches und visuell interessantes Werk zu schaffen. Der moderne und abstrakte Charakter des Gemäldes macht es zu einer perfekten Ergänzung für zeitgenössische Innenarchitekturen. Insgesamt ist ein modernes kubistisches Landschaftsgemälde ein kühnes und innovatives Kunstwerk, das jedem Raum ein Gefühl von Energie und Dynamik verleihen kann. Die fragmentierte und abstrahierte Komposition lädt den Betrachter dazu ein, das Gemälde auf seine eigene Weise zu interpretieren und mit ihm in Verbindung zu treten, während die Verwendung kräftiger Farben und geometrischer Formen ein Gefühl von Dramatik und Aufregung erzeugt.',
      }),
    ]);

export default modernLandscapePainting01;
