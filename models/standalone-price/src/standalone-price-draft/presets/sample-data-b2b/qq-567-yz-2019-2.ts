import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const qq567Yz20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('qq567-yz-2019-2')
    .sku('qq567-yz-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2750000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default qq567Yz20192;
