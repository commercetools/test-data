import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ss123QrRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ss123-qr-red-2')
    .sku('ss123-qr-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3465000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ss123QrRed2;
