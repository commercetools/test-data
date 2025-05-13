import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const z890Op20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('z890-op-2019-3')
    .sku('z890-op-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3861000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default z890Op20193;
