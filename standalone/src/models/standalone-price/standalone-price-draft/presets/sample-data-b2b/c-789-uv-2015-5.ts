import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const c789Uv20155 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('c789-uv-2015-5')
    .sku('c789-uv-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1080000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default c789Uv20155;
