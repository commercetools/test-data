import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvRed6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-red-6')
    .sku('aaa789-uv-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3600000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default aaa789UvRed6;
