import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x234Wx20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x234-wx-2019-1')
    .sku('x234-wx-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2420000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x234Wx20191;
