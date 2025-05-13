import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const m890Op20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('m890-op-2023-1')
    .sku('m890-op-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1452000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default m890Op20231;
