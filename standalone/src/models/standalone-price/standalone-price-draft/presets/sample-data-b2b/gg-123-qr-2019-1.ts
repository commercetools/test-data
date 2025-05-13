import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2019-1')
    .sku('gg123-qr-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2057001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default gg123Qr20191;
