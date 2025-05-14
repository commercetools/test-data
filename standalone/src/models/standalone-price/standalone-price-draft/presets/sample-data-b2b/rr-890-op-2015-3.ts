import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const rr890Op20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('rr890-op-2015-3')
    .sku('rr890-op-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3960000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default rr890Op20153;
