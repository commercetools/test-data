import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fff456StBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fff456-st-blue-1')
    .sku('fff456-st-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(7865001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fff456StBlue1;
