import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fuelFilter2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fuel-filter-2')
    .sku('fuel-filter')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3250))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fuelFilter2;
