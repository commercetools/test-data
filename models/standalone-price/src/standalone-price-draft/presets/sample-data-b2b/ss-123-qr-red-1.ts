import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ss123QrRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ss123-qr-red-1')
    .sku('ss123-qr-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3850000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ss123QrRed1;
