import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bb456St20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bb456-st-2019-3')
    .sku('bb456-st-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2574000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bb456St20193;
