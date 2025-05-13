import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jjj890OpRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jjj890-op-red-3')
    .sku('jjj890-op-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(11880000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jjj890OpRed3;
