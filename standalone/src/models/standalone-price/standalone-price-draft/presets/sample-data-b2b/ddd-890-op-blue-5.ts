import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ddd890OpBlue5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ddd890-op-blue-5')
    .sku('ddd890-op-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(6750000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default ddd890OpBlue5;
