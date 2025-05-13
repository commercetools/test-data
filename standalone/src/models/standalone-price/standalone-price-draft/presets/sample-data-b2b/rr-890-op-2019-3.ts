import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const rr890Op20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('rr890-op-2019-3')
    .sku('rr890-op-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(4290000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default rr890Op20193;
