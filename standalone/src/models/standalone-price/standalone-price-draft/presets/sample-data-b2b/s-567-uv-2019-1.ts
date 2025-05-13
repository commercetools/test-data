import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const s567Uv20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('s567-uv-2019-1')
    .sku('s567-uv-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1149501))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default s567Uv20191;
