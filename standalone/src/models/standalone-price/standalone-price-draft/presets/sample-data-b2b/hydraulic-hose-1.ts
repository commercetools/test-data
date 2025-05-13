import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hydraulicHose1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hydraulic-hose-1')
    .sku('hydraulic-hose')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(7500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hydraulicHose1;
