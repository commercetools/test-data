import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-red-3')
    .sku('yy123-qr-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(7920000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default yy123QrRed3;
