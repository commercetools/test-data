import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const iii567YzGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('iii567-yz-green-3')
    .sku('iii567-yz-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(18480000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default iii567YzGreen3;
