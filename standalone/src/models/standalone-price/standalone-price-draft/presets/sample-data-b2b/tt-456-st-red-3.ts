import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const tt456StRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tt456-st-red-3')
    .sku('tt456-st-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3960000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default tt456StRed3;
