import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const l890Op20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('l890-op-2019-1')
    .sku('l890-op-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1815001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default l890Op20191;
