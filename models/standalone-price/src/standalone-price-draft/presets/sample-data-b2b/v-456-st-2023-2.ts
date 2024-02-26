import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const v456St20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('v456-st-2023-2')
    .sku('v456-st-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3025000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default v456St20232;
