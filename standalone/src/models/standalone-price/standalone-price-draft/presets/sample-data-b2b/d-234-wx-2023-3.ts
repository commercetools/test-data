import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const d234Wx20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('d234-wx-2023-3')
    .sku('d234-wx-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1386000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default d234Wx20233;
