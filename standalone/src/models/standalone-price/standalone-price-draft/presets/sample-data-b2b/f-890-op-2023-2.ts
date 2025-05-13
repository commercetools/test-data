import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const f890Op20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('f890-op-2023-2')
    .sku('f890-op-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1210000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default f890Op20232;
