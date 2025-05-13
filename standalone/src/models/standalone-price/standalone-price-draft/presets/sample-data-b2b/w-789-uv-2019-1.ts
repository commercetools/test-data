import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const w789Uv20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('w789-uv-2019-1')
    .sku('w789-uv-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3630001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default w789Uv20191;
