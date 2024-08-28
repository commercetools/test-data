import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ee567Yz20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ee567-yz-2019-1')
    .sku('ee567-yz-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2420000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ee567Yz20191;
