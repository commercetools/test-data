import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ccc567YzBlue8 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ccc567-yz-blue-8')
    .sku('ccc567-yz-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(9900000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default ccc567YzBlue8;
