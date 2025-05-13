import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pistonRingSet3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('piston-ring-set-3')
    .sku('piston-ring-set')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(17500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pistonRingSet3;
