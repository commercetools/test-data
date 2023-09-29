import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailStrainer01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('STRA-095')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(399))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_93371908-9q9vrNXx.jpeg'
        )
        .dimensions({ w: 5472, h: 3648 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_97174497-F5iWBxGv.jpeg'
        )
        .dimensions({ w: 3648, h: 5472 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Dishwasher safe',
        'en-US': '- Stainless steel\n- Dishwasher safe',
        'de-DE': '- Edelstahl\n- Spülmaschinenfest',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.',
        'en-US':
          'A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.',
        'de-DE':
          'Ein Sieb für Cocktailshaker ist ein Barwerkzeug, das verwendet wird, um Eis und andere feste Zutaten aus Mixgetränken abzuseihen, während der flüssige Teil des Cocktails in ein Servierglas gegossen wird. Er besteht aus Metall und hat eine flache, perforierte Scheibe, die über die Öffnung des Shakers passt. Das Sieb wird an Ort und Stelle gehalten, indem man einen Finger über den kleinen, griffartigen Vorsprung auf einer Seite der Scheibe legt, während man die Flüssigkeit durch die größere Öffnung auf der anderen Seite ausgießt. Die perforierte Scheibe hilft dabei, kleine Eis- oder Fruchtstücke herauszufiltern, die in der Mischung zurückbleiben könnten, was zu einem glatten und raffinierten Cocktail führt. Das Sieb hat auch eine Feder um den Rand der Scheibe, die hilft, es sicher über dem Shaker zu halten und so ein Verschütten oder Tropfen zu verhindern.',
      }),
    ]);

export default cocktailStrainer01;
