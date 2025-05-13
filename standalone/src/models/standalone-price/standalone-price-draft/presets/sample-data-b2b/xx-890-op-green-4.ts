import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpGreen4 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-green-4')
    .sku('xx890-op-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(5000000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default xx890OpGreen4;
