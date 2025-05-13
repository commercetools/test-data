import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20157 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2015-7')
    .sku('cc789-uv-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2640000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default cc789Uv20157;
