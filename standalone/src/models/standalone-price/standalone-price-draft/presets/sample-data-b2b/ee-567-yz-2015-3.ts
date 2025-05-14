import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ee567Yz20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ee567-yz-2015-3')
    .sku('ee567-yz-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2640000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ee567Yz20153;
