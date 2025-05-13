import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const z890Op20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('z890-op-2015-2')
    .sku('z890-op-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2673000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default z890Op20152;
