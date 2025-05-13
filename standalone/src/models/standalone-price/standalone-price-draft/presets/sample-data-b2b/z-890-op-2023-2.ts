import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const z890Op20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('z890-op-2023-2')
    .sku('z890-op-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3267001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default z890Op20232;
