import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const e567Yz20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('e567-yz-2023-1')
    .sku('e567-yz-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1452000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default e567Yz20231;
