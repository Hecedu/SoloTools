export type ExpeditionsAutomaCard = {
  id: number;
  advancesTrack: boolean;
  northMechRoutine: MechRoutine;
  centralMechRoutine: MechRoutine;
};

type MechRoutine = {
  performsSwipe: boolean;
  action: MechAction | undefined;
  roamAmount: number;
};

type MechAction = {
  gloryRequirement: number;
  action: mechAction;
  amount: number;
};

export class mechAction {
  static readonly COLLECT_MAP  = new mechAction("COLLECT_DISCOVERY_TOKEN", "Collect a discovery token.","🧭");
  static readonly VANQUISH_CORRUPTION = new mechAction('VANQUISH_CORRUPTION', 'Vanquish 🔵 corruption tokens.', "🔵");
  static readonly VANQUISH_LAIR  = new mechAction('VANQUISH_LAIR', 'Vanquish the 20 corruption lair (🧿).', "🧿");

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly description: any, public readonly icon: any) {
  }

  toString() {
    return this.key;
  }
}

export const expeditionsAutomaDeck: ExpeditionsAutomaCard[] = [
  {
    id: 1,
    advancesTrack: false,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 1,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 1,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 5,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 2,
      },
      roamAmount: 1,
    },
  },
  {
    id: 2,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 2,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 2,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 3,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 1,
      },
      roamAmount: 2,
    },
  },
  {
    id: 3,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: true,
      action: {
        gloryRequirement: 3,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 3,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 4,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 3,
      },
      roamAmount: 3,
    },
  },
  {
    id: 4,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: true,
      action: {
        gloryRequirement: 3,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 1,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 4,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 2,
      },
      roamAmount: 2,
    },
  },
  {
    id: 5,
    advancesTrack: false,
    northMechRoutine: {
      performsSwipe: true,
      action: {
        gloryRequirement: 4,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 2,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 3,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 1,
      },
      roamAmount: 3,
    },
  },
  {
    id: 6,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 2,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 1,
      },
      roamAmount: 3,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 2,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 1,
      },
      roamAmount: 1,
    },
  },
  {
    id: 7,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 3,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 1,
      },
      roamAmount: 1,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: undefined,
      roamAmount: 1,
    },
  },
  {
    id: 8,
    advancesTrack: false,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 3,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 2,
      },
      roamAmount: 2,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: undefined,
      roamAmount: 1,
    },
  },
  {
    id: 9,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 4,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 3,
      },
      roamAmount: 3,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: undefined,
      roamAmount: 2,
    },
  },
  {
    id: 10,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 4,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 1,
      },
      roamAmount: 1,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 0,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 3,
    },
  },
  {
    id: 11,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 5,
        action: mechAction.VANQUISH_CORRUPTION,
        amount: 2,
      },
      roamAmount: 2,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 0,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 2,
    },
  },
  {
    id: 12,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 6,
        action: mechAction.VANQUISH_LAIR,
        amount: 1,
      },
      roamAmount: 3,
    },
    centralMechRoutine: {
      performsSwipe: true,
      action: {
        gloryRequirement: 1,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 1,
    },
  },
  {
    id: 13,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 5,
        action: mechAction.VANQUISH_LAIR,
        amount: 1,
      },
      roamAmount: 2,
    },
    centralMechRoutine: {
      performsSwipe: true,
      action: {
        gloryRequirement: 2,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 3,
    },
  },
  {
    id: 14,
    advancesTrack: true,
    northMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 7,
        action: mechAction.VANQUISH_LAIR,
        amount: 1,
      },
      roamAmount: 3,
    },
    centralMechRoutine: {
      performsSwipe: false,
      action: {
        gloryRequirement: 0,
        action: mechAction.COLLECT_MAP,
        amount: 1,
      },
      roamAmount: 2,
    },
  },
];
