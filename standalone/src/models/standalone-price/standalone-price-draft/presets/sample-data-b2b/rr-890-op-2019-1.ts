import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const rr890Op20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('rr890-op-2019-1')
    .sku('rr890-op-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3630001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default rr890Op20191;
