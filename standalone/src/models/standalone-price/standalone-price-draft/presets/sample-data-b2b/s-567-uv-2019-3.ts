import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const s567Uv20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('s567-uv-2019-3')
    .sku('s567-uv-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1358500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default s567Uv20193;
