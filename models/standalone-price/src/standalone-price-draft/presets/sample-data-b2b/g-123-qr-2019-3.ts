import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const g123Qr20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('g123-qr-2019-3')
    .sku('g123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1430000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default g123Qr20193;
