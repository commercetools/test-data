import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const brakePadSet2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('brake-pad-set-2')
    .sku('brake-pad-set')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(10000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default brakePadSet2;
