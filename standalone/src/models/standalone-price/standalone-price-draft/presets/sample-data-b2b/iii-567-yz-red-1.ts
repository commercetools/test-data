import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const iii567YzRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('iii567-yz-red-1')
    .sku('iii567-yz-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(13200000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default iii567YzRed1;
