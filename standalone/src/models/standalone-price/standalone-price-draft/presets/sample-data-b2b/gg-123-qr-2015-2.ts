import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2015-2')
    .sku('gg123-qr-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1683000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default gg123Qr20152;
