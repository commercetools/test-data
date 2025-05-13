import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aa123Qr20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aa123-qr-2019-2')
    .sku('aa123-qr-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1320000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aa123Qr20192;
