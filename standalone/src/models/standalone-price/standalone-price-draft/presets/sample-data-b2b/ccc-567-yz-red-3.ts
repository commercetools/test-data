import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ccc567YzRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ccc567-yz-red-3')
    .sku('ccc567-yz-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(11880000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ccc567YzRed3;
