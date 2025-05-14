import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fff456StBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fff456-st-blue-3')
    .sku('fff456-st-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(9295000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fff456StBlue3;
