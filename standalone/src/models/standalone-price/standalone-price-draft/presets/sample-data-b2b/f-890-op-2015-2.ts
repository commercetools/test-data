import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const f890Op20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('f890-op-2015-2')
    .sku('f890-op-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(990000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default f890Op20152;
