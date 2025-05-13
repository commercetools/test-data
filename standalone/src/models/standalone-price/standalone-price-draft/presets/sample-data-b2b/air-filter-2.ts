import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const airFilter2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('air-filter-2')
    .sku('air-filter')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default airFilter2;
