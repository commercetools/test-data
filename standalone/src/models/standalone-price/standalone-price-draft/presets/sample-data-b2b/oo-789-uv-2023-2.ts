import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oo789Uv20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oo789-uv-2023-2')
    .sku('oo789-uv-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3025000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default oo789Uv20232;
