import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernCeramicPlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .key('modernCeramicPlate01')
    .sku('MCP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Ceramic_Plate-1.1.jpeg'
        )
        .dimensions({ w: 5088, h: 4576 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 plate',
        'de-DE': '- Enthält 1 Teller',
        'en-US': '- Includes 1 plate',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
    ]);

export default modernCeramicPlate01;
