import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x234Wx20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x234-wx-2015-3')
    .sku('x234-wx-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2640000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x234Wx20153;
