import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jjj890OpGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jjj890-op-green-2')
    .sku('jjj890-op-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(10890000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jjj890OpGreen2;
