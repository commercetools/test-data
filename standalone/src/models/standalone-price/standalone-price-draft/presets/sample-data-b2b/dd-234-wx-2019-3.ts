import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2019-3')
    .sku('dd234-wx-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2145000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default dd234Wx20193;
