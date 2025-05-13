import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-red-2')
    .sku('yy123-qr-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(5940000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default yy123QrRed2;
