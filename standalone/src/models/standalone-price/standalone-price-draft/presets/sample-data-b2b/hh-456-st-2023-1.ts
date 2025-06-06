import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hh456St20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hh456-st-2023-1')
    .sku('hh456-st-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2640000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hh456St20231;
