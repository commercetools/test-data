import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const s567Uv20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('s567-uv-2015-1')
    .sku('s567-uv-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1045000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default s567Uv20151;
