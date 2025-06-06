import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const rr890Op20156 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('rr890-op-2015-6')
    .sku('rr890-op-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2400000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default rr890Op20156;
