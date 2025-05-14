import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const e567Yz20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('e567-yz-2023-3')
    .sku('e567-yz-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1694000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default e567Yz20233;
