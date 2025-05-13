import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oo789Uv20235 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oo789-uv-2023-5')
    .sku('oo789-uv-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2250000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default oo789Uv20235;
