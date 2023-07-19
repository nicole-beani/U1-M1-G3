"use strict";
class Lavoratore {
    constructor(type, codredd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.type = type;
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        console.log(`Reddito Netto di ${this.type}`, this.getRedditoAnnuoNetto);
    }
    get getUtileTasse() {
        return (this.codredd * this.redditoAnnuoLordo) / 100;
    }
    get getTasseInps() {
        return (this.getUtileTasse * this.tasseInps) / 100;
    }
    get getTasseIrpef() {
        return (this.getUtileTasse * this.tasseIrpef) / 100;
    }
    get getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps + this.getTasseIrpef);
    }
}
class Contabile extends Lavoratore {
    constructor() {
        super("Contabile", 37, 200000, 29, 39);
    }
}
class Stefano extends Lavoratore {
    constructor() {
        super(" Luck Stefano ", 0, 1000000, 0, 0);
        console.log("Tasse INPS di Stefano", this.getTasseInps);
        console.log("Tasse IRPEF di Stefano", this.tasseIrpef);
        console.log("Stefano non sgancia gli skei");
    }
}
let commerciante = new Contabile();
let stefano = new Stefano();
