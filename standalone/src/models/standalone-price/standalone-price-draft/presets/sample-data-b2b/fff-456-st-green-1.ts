import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fff456StGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fff456-st-green-1')
    .sku('fff456-st-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(8580000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fff456StGreen1;
