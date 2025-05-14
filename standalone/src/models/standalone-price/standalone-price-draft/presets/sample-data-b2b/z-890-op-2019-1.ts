import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const z890Op20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('z890-op-2019-1')
    .sku('z890-op-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3267001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default z890Op20191;
