import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const airFilter3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('air-filter-3')
    .sku('air-filter')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(4000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default airFilter3;
