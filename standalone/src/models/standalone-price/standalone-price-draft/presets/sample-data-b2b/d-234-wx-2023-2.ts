import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const d234Wx20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('d234-wx-2023-2')
    .sku('d234-wx-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1089001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default d234Wx20232;
