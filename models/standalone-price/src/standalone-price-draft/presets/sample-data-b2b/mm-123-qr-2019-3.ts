import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2019-3')
    .sku('mm123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2574000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default mm123Qr20193;
