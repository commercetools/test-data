import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const n123Qr20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2015-3')
    .sku('n123-qr-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1056000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default n123Qr20153;
