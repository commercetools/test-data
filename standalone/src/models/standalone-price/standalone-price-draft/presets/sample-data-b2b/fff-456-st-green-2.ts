import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fff456StGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fff456-st-green-2')
    .sku('fff456-st-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7865001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fff456StGreen2;
