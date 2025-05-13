import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const tt456StBlue5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tt456-st-blue-5')
    .sku('tt456-st-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2700000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default tt456StBlue5;
