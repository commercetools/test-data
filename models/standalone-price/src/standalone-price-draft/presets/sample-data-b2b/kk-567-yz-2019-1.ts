import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const kk567Yz20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('kk567-yz-2019-1')
    .sku('kk567-yz-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3630001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default kk567Yz20191;
