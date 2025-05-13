import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20194 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2019-4')
    .sku('cc789-uv-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2200000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default cc789Uv20194;
