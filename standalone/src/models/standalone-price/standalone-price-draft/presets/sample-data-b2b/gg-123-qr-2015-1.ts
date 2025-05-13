import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2015-1')
    .sku('gg123-qr-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1870000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default gg123Qr20151;
