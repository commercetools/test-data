import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2023-3')
    .sku('cc789-uv-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3388000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default cc789Uv20233;
