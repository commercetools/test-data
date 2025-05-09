import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-red-3')
    .sku('aaa789-uv-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5940000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aaa789UvRed3;
