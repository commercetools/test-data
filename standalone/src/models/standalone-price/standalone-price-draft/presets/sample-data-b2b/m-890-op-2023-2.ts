import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const m890Op20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('m890-op-2023-2')
    .sku('m890-op-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1331000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default m890Op20232;
