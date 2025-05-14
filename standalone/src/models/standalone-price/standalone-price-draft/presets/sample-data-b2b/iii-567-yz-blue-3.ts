import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const iii567YzBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('iii567-yz-blue-3')
    .sku('iii567-yz-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(17160000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default iii567YzBlue3;
