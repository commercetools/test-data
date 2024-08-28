import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ss123QrGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ss123-qr-green-1')
    .sku('ss123-qr-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(4620000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ss123QrGreen1;
