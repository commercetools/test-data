import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jj234Wx20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jj234-wx-2023-1')
    .sku('jj234-wx-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3300000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jj234Wx20231;
