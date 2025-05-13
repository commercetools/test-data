import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const i789Uv20198 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('i789-uv-2019-8')
    .sku('i789-uv-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1540001))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default i789Uv20198;
