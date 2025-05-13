import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jj234Wx20235 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jj234-wx-2023-5')
    .sku('jj234-wx-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2250000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default jj234Wx20235;
