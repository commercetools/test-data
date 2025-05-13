import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const d234Wx20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('d234-wx-2019-1')
    .sku('d234-wx-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1089001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default d234Wx20191;
