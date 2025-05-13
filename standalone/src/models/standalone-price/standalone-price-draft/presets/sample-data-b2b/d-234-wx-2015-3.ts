import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const d234Wx20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('d234-wx-2015-3')
    .sku('d234-wx-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1188000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default d234Wx20153;
