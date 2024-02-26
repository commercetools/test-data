import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ccc567YzBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ccc567-yz-blue-1')
    .sku('ccc567-yz-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(10890000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ccc567YzBlue1;
