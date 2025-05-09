import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const taperedRollerBearing5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tapered-roller-bearing-5')
    .sku('tapered-roller-bearing')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(20000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default taperedRollerBearing5;
