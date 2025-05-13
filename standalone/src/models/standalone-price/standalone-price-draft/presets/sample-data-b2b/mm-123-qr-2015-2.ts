import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2015-2')
    .sku('mm123-qr-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1782000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default mm123Qr20152;
