import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hydraulicHose6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hydraulic-hose-6')
    .sku('hydraulic-hose')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7500))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default hydraulicHose6;
