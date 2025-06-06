import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const b456St20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('b456-st-2023-1')
    .sku('b456-st-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1254000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default b456St20231;
