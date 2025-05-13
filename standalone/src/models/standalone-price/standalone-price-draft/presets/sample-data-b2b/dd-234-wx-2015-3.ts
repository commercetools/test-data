import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2015-3')
    .sku('dd234-wx-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1980000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default dd234Wx20153;
