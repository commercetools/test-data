import { LocalizedStringDraft } from '@/models/commons';
import type { TCategoryDraftBuilder } from '../../../types';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kipper, die bei Bergbauoperationen verwendet werden')
        ['it-IT']('Camion ribaltabili utilizzati in operazioni minerarie')
        ['nl-NL']('Kipwagens gebruikt in mijnbouwoperaties')
        ['fr-FR']('Camions-bennes utilisés dans les opérations minières')
        ['en-AU']('Dump trucks used in mining operations')
        ['es-ES']('Camiones volquete utilizados en operaciones mineras')
        ['en-GB']('Dump trucks used in mining operations')
        ['en-NZ']('Dump trucks used in mining operations')
        ['pt-PT']('Caminhões basculantes usados em operações de mineração')
        ['en-US']('Dump trucks used in mining operations')
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
    .orderHint('0.00001711364484524846530528');

export default dumpTrucks;
