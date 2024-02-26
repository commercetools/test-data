import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrBlue6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-blue-6')
    .sku('yy123-qr-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4800000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default yy123QrBlue6;
