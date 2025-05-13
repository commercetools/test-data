import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20154 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2015-4')
    .sku('dd234-wx-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1500000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default dd234Wx20154;
