import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aa123Qr20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aa123-qr-2019-3')
    .sku('aa123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1716000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aa123Qr20193;
