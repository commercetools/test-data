import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const greenServingPlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_448085484-pW171SGO.jpeg'
        )
        .dimensions({ w: 4631, h: 4426 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_487645978-EEFXxufp.jpeg'
        )
        .dimensions({ w: 5705, h: 3653 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'de-DE':
          'Ein stilvoller grüner Servierteller ist ein Gericht, das entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren.  Der Teller ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Platte Tiefe und Textur verleiht.  Die Form der Platte kann variieren, mit einigen gebogenen Kanten für zusätzliches visuelles Interesse. Der Teller hat ein dekoratives Muster und eine Textur.  Ein stilvoller grüner Servierteller ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist ein stilvoller grüner Servierteller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen es zu einem Blickfang auf jedem Tisch, während seine Haltbarkeit und Praktikabilität dafür sorgen, dass es sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.',
        'en-GB':
          'A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.',
        'en-US':
          'A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.',
      }),
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Includes 1 plate' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default greenServingPlate01;
