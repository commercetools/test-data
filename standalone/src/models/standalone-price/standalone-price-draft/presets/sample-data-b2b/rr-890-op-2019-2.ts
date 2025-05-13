import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const rr890Op20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('rr890-op-2019-2')
    .sku('rr890-op-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3300000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default rr890Op20192;
