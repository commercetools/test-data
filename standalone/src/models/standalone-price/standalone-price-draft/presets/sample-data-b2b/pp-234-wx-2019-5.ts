import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pp234Wx20195 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pp234-wx-2019-5')
    .sku('pp234-wx-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1800000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default pp234Wx20195;
