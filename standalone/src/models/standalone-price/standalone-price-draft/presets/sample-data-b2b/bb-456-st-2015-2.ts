import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bb456St20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bb456-st-2015-2')
    .sku('bb456-st-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1782000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bb456St20152;
