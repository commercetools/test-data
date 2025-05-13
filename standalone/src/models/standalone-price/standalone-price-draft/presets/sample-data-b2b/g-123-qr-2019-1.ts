import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const g123Qr20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('g123-qr-2019-1')
    .sku('g123-qr-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1210000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default g123Qr20191;
