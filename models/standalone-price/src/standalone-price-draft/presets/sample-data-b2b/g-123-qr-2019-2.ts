import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const g123Qr20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('g123-qr-2019-2')
    .sku('g123-qr-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1100000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default g123Qr20192;
