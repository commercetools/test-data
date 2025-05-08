import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-red-2')
    .sku('aaa789-uv-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4455000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aaa789UvRed2;
