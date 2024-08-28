import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aa123Qr20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aa123-qr-2015-1')
    .sku('aa123-qr-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1320000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aa123Qr20151;
