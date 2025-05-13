import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const i789Uv20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('i789-uv-2015-2')
    .sku('i789-uv-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1386000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default i789Uv20152;
