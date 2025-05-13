import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const eee123QrGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('eee123-qr-green-2')
    .sku('eee123-qr-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(6050000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default eee123QrGreen2;
