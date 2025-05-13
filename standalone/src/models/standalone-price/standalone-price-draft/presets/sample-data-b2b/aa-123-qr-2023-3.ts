import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aa123Qr20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aa123-qr-2023-3')
    .sku('aa123-qr-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1848000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aa123Qr20233;
