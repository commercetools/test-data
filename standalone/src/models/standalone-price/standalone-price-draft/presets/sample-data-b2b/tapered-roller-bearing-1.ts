import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const taperedRollerBearing1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tapered-roller-bearing-1')
    .sku('tapered-roller-bearing')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(20000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default taperedRollerBearing1;
