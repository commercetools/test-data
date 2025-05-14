import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const y567Yz20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('y567-yz-2015-2')
    .sku('y567-yz-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2277000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default y567Yz20152;
