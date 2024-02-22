import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ss123QrRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ss123-qr-red-3')
    .sku('ss123-qr-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(4620000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ss123QrRed3;
