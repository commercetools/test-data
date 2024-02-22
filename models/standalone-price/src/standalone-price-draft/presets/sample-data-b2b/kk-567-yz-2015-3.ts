import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const kk567Yz20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('kk567-yz-2015-3')
    .sku('kk567-yz-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3960000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default kk567Yz20153;
