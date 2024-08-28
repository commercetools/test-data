import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hydraulicHose3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hydraulic-hose-3')
    .sku('hydraulic-hose')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(7500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hydraulicHose3;
