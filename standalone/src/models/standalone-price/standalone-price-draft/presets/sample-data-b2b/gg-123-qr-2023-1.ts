import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2023-1')
    .sku('gg123-qr-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2244000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default gg123Qr20231;
