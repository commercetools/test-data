import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const w789Uv20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('w789-uv-2023-2')
    .sku('w789-uv-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3630001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default w789Uv20232;
