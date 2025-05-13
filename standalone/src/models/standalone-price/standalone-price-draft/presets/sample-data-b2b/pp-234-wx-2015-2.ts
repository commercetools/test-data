import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pp234Wx20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pp234-wx-2015-2')
    .sku('pp234-wx-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1980000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pp234Wx20152;
