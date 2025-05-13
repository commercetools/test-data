import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20195 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2019-5')
    .sku('mm123-qr-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1620000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default mm123Qr20195;
