import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const nn456St20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('nn456-st-2019-3')
    .sku('nn456-st-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3146000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default nn456St20193;
