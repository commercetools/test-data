import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20236 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2023-6')
    .sku('dd234-wx-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1200000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default dd234Wx20236;
