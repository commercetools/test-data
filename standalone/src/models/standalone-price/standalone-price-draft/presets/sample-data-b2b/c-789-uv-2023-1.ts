import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const c789Uv20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('c789-uv-2023-1')
    .sku('c789-uv-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1584000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default c789Uv20231;
