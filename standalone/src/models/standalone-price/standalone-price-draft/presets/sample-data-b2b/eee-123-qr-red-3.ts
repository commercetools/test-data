import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const eee123QrRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('eee123-qr-red-3')
    .sku('eee123-qr-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6600000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default eee123QrRed3;
