import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const nn456St20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('nn456-st-2019-2')
    .sku('nn456-st-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2420000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default nn456St20192;
