import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const redModernPainting01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RMP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(3299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(3299))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_223706401-156HnmPk.jpeg'
        )
        .dimensions({ w: 3893, h: 3894 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Acrylic on canvas\n- 2ft by 2ft' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.",
        'en-US':
          "A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.",
        'de-DE':
          'Ein rotes modernes Gemälde auf Leinwand ist ein kühnes und markantes Kunstwerk, das jedem Raum ein zeitgenössisches Flair verleihen kann. Das Gemälde wird mit Acrylfarben auf einer gespannten Leinwand erstellt und weist eine Reihe von Rottönen auf.  Die Größe des Gemäldes kann variieren, von einem kleinen Stück, das als Teil einer Galeriegruppe an eine Wand gehängt werden kann, bis zu einem großen Statement-Stück, das den Raum dominiert. Das rote Farbschema des Gemäldes kann einen starken Brennpunkt schaffen, den Blick darauf lenken und ein Gefühl von Dramatik erzeugen.  Der Stil des Gemäldes ist zeitgenössisch, wobei der Schwerpunkt darauf liegt, Emotionen und Ideen durch Farbe und Form auszudrücken. Die rote Farbe kann je nach Absicht des Künstlers symbolisch sein und Leidenschaft, Stärke oder Energie darstellen.  Insgesamt ist ein rotes modernes Gemälde auf Leinwand ein lebendiges und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Dramatik und Aufregung verleihen kann.',
      }),
    ]);

export default redModernPainting01;
