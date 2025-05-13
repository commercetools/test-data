import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ll890Op20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ll890-op-2023-2')
    .sku('ll890-op-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4235001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ll890Op20232;
