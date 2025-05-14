import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-red-1')
    .sku('xx890-op-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(5500000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default xx890OpRed1;
