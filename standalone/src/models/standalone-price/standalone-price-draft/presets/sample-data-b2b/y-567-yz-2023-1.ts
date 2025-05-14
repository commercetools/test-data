import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const y567Yz20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('y567-yz-2023-1')
    .sku('y567-yz-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3036000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default y567Yz20231;
