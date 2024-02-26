import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const dumpTrucks = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bergbaukipper')
        ['it-IT']('Camion Ribaltabili')
        ['nl-NL']('Kipwagens')
        ['fr-FR']('Camions-bennes')
        ['en-AU']('Dump Trucks')
        ['es-ES']('Camiones volquete')
        ['en-GB']('Dump Trucks')
        ['en-NZ']('Dump Trucks')
        ['pt-PT']('Caminhões Basculantes')
        ['en-US']('Dump Trucks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bergbau_kipper')
        ['it-IT']('mining_dump_trucks')
        ['nl-NL']('mining_dump_trucks')
        ['fr-FR']('camions_bennes_miniers')
        ['en-AU']('mining_dump_trucks')
        ['es-ES']('camiones_volquete_mineros')
        ['en-GB']('mining_dump_trucks')
        ['en-NZ']('mining_dump_trucks')
        ['pt-PT']('mining_dump_trucks')
        ['en-US']('mining_dump_trucks')
    )
    .key('dump-trucks')
    .orderHint('0.000017083829376992031863512');

export default dumpTrucks;
