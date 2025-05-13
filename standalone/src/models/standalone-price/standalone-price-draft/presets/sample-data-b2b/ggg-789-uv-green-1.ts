import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ggg789UvGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ggg789-uv-green-1')
    .sku('ggg789-uv-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(9900000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ggg789UvGreen1;
