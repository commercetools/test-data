import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const k567Yz20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('k567-yz-2023-1')
    .sku('k567-yz-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1716000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default k567Yz20231;
