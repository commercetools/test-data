import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const wineBottleOpener01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('WOP-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(199))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_244081706-6sBqDCbm.jpeg'
        )
        .dimensions({ w: 5184, h: 3456 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Stainless steel',
          'en-US': '- Stainless steel',
          'de-DE': '- Edelstahl',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
          'en-US':
            'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
          'de-DE':
            'Mit diesem praktischen Korkenzieher wird das Öffnen von Weinflaschen zur leichten Übung. Der Korkenzieher hat eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gehoben wird. Ein weiteres Feature des Korkenziehers im Hebelstil ist ein Flaschenöffner.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#C0C0C0',
          label: { 'de-DE': 'Silber', 'en-GB': 'Silver', 'en-US': 'Silver' },
        }),
    ]);

export default wineBottleOpener01;
