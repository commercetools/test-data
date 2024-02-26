import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const iii567YzBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('iii567-yz-blue-1')
    .sku('iii567-yz-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(14520001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default iii567YzBlue1;
