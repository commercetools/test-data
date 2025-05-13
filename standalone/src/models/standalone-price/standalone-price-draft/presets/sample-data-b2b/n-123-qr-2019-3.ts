import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const n123Qr20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2019-3')
    .sku('n123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1144000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default n123Qr20193;
