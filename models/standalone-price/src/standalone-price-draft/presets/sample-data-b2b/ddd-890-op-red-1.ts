import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ddd890OpRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ddd890-op-red-1')
    .sku('ddd890-op-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(8250000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ddd890OpRed1;
