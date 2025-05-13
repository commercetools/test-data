import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const i789Uv20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('i789-uv-2015-1')
    .sku('i789-uv-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1540000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default i789Uv20151;
