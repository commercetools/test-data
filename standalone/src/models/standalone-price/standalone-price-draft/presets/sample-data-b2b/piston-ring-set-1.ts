import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pistonRingSet1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('piston-ring-set-1')
    .sku('piston-ring-set')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(17500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pistonRingSet1;
