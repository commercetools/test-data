import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const f890Op20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('f890-op-2015-1')
    .sku('f890-op-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1100000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default f890Op20151;
