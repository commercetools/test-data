import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pp234Wx20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pp234-wx-2019-3')
    .sku('pp234-wx-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2860000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pp234Wx20193;
