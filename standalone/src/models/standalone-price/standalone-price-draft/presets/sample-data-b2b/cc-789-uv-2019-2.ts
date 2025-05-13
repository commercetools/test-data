import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2019-2')
    .sku('cc789-uv-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2420000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default cc789Uv20192;
