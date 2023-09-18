import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const canelaThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CTSS-098')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Canela%203-Seater%20Sofa-y5sV4Zny.jpeg'
        )
        .dimensions({ w: 5029, h: 3353 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/sofa%20(1)-Y1K6YUDE.jpeg'
        )
        .dimensions({ w: 1170, h: 780 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Leather upholstery \n- 3 seater' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.',
        'en-US':
          'A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.',
        'de-DE':
          'Ein Leder-Dreisitzer-Sofa ist ein Möbelstück, das entworfen wurde, um bequemen Platz für drei Personen zu bieten. Das Sofa ist aus hochwertigem Leder gefertigt, das für seine Langlebigkeit, Stärke und natürliche Schönheit bekannt ist. Das Ledermaterial wird mit Schutzbeschichtungen behandelt, um es widerstandsfähiger gegen Abnutzung, Flecken und Spritzer zu machen.  Das Sofa verfügt über einen stabilen Rahmen aus Holz mit einer Reihe von Federn und Kissen, die den sitzenden Personen Halt und Komfort bieten. Die Kissen sind mit Daunenfedern gefüllt.  Das Ledersofa hat klare Linien und minimale dekorative Elemente für einen moderneren oder zeitgemäßeren Look.  Insgesamt ist ein Leder-Dreisitzer-Sofa ein vielseitiges und stilvolles Möbelstück, das bequeme Sitzgelegenheiten bietet und jedem Wohnraum einen Hauch von Eleganz verleiht.',
      }),
      AttributeDraft.random().name('colorlabel').value({ 'en-GB': 'Tan' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random().name('color').value({ 'en-GB': '#CE9A17' }),
      AttributeDraft.random().name('finishlabel').value({ 'en-GB': 'Pine' }),
      AttributeDraft.random().name('finish').value({ 'en-GB': '#E4B849' }),
    ]);

export default canelaThreeSeaterSofa01;
