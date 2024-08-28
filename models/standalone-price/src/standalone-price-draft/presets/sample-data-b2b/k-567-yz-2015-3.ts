import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const k567Yz20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('k567-yz-2015-3')
    .sku('k567-yz-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1716000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default k567Yz20153;
