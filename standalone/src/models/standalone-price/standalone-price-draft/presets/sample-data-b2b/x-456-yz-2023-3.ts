import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x456Yz20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x456-yz-2023-3')
    .sku('x456-yz-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1694000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x456Yz20233;
