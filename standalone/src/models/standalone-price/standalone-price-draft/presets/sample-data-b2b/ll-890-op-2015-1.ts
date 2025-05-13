import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ll890Op20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ll890-op-2015-1')
    .sku('ll890-op-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3850000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ll890Op20151;
