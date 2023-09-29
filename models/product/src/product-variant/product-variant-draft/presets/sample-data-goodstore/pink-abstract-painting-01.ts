import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const pinkAbstractPainting01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('PAP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(5999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(5999))
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
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_105588712-1zzmDPbe.jpeg'
        )
        .dimensions({ w: 3873, h: 3873 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Acrylic on canvas\n- 2ft by 2ft',
        'en-US': '- Acrylic on canvas\n- 2ft by 2ft',
        'de-DE': '- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.',
        'en-US':
          'A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.',
        'de-DE':
          'Ein rosafarbenes abstraktes Gemälde ist ein lebhaftes und auffälliges Kunstwerk, das eine Reihe von Emotionen und Interpretationen hervorrufen kann. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Die Komposition des Gemäldes ist abstrakt und enthält keine erkennbaren Objekte oder Figuren. Die Verwendung von Rosa auf dem Gemälde kann symbolisch sein und Liebe, Weiblichkeit oder Energie darstellen. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Einzelstück an die Wand gehängt werden. Das Rosa des Gemäldes kann einen starken Fokuspunkt bilden, der das Auge auf das Bild lenkt und ein Gefühl von Energie erzeugt. Insgesamt ist ein rosafarbenes abstraktes Gemälde ein kühnes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Vitalität und Aufregung verleihen kann. Die lebendige Farbgebung und die abstrakte Komposition können ein geheimnisvolles Gefühl und Faszination erzeugen und den Betrachter dazu einladen, das Gemälde auf seine eigene Weise zu interpretieren und sich mit ihm zu verbinden.',
      }),
    ]);

export default pinkAbstractPainting01;
