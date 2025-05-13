import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const zz456StGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('zz456-st-green-1')
    .sku('zz456-st-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(4620000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default zz456StGreen1;
