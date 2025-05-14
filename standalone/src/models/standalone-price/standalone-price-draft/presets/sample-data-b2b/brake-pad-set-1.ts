import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const brakePadSet1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('brake-pad-set-1')
    .sku('brake-pad-set')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(10000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default brakePadSet1;
