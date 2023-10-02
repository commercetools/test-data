import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernUpholsteredTwinBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MUTB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(45000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(45000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(45000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_328257275-3Vpu3-XJ.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_328257300-vojQNRph.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_328257281-ctQkSsVF.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'en-GB':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'de-DE':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'white', 'en-GB': 'white', 'de-DE': 'white' }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'lightslategrey',
        'en-GB': 'lightslategrey',
        'de-DE': 'lightslategrey',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'White', 'en-GB': 'White', 'de-DE': 'White' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Oak', 'en-GB': 'Oak', 'de-DE': 'Oak' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default modernUpholsteredTwinBed01;
