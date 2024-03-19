import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ww567YzBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ww567-yz-blue-3')
    .sku('ww567-yz-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6435000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ww567YzBlue3;
