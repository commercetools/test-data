import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bb456St20235 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bb456-st-2023-5')
    .sku('bb456-st-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1620000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default bb456St20235;
