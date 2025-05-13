import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pp234Wx20234 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pp234-wx-2023-4')
    .sku('pp234-wx-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2000000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default pp234Wx20234;
