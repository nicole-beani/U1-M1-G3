abstract class Lavoratore {
    constructor(
      public type: string,
      public codredd: number,
      public redditoAnnuoLordo: number,
      public tasseInps: number,
      public tasseIrpef: number
    ) {
      console.log(`Reddito Netto di ${this.type}`, this.getRedditoAnnuoNetto);
    }
  
    get getUtileTasse(): number {
      return (this.codredd * this.redditoAnnuoLordo) / 100;
    }
  
    get getTasseInps(): number {
      return (this.getUtileTasse * this.tasseInps) / 100;
    }
  
    get getTasseIrpef(): number {
      return (this.getUtileTasse * this.tasseIrpef) / 100;
    }
  
    get getRedditoAnnuoNetto(): number {
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