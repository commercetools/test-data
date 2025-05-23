import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const y567Yz20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('y567-yz-2019-3')
    .sku('y567-yz-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3289000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default y567Yz20193;
