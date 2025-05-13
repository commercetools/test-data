import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvBlue7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-blue-7')
    .sku('aaa789-uv-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5400000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default aaa789UvBlue7;
