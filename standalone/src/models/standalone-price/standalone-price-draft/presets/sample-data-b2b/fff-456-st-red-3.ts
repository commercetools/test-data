import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fff456StRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fff456-st-red-3')
    .sku('fff456-st-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(8580000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fff456StRed3;
