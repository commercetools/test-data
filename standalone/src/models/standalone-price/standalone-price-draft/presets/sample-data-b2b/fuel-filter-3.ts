import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fuelFilter3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fuel-filter-3')
    .sku('fuel-filter')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3250))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fuelFilter3;
