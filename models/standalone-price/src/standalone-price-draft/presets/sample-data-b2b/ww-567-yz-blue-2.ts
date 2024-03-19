import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ww567YzBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ww567-yz-blue-2')
    .sku('ww567-yz-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4950000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ww567YzBlue2;
