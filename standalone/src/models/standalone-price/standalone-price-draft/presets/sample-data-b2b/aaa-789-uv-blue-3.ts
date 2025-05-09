import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-blue-3')
    .sku('aaa789-uv-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6435000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aaa789UvBlue3;
