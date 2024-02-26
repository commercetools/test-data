import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrGreen7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-green-7')
    .sku('yy123-qr-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(7200000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default yy123QrGreen7;
