import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-red-1')
    .sku('aaa789-uv-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(4950000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aaa789UvRed1;
