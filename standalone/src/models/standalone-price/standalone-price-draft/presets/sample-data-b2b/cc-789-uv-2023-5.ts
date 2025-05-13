import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20235 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2023-5')
    .sku('cc789-uv-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1980000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default cc789Uv20235;
