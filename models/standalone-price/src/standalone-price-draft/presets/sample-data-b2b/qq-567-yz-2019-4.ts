import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const qq567Yz20194 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('qq567-yz-2019-4')
    .sku('qq567-yz-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2500000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default qq567Yz20194;
