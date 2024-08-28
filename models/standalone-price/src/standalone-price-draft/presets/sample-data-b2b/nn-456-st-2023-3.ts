import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const nn456St20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('nn456-st-2023-3')
    .sku('nn456-st-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3388000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default nn456St20233;
