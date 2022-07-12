class Animal{
    tipoAlimentacion: string | undefined;
    vertebra: boolean | undefined;
    especie: string | undefined;
}
class AnimalDomestico extends Animal{
    Animal1: string;
    Animal2: string;
    Animal3: string;
    Animal4: string;
    Animal5: string;

    constructor(animal1:string, animal2: string, animal3:string, animal4: string, animal5: string,){
        super();
        this.Animal1 = animal1;
        this.Animal2 = animal2;
        this.Animal3 = animal3;
        this.Animal4 = animal4;
        this.Animal5 = animal5;
    }
}
class AnimalSalvaje extends Animal{
    Animal1: string;
    Animal2: string;
    Animal3: string;
    Animal4: string;
    Animal5: string;

    constructor(animal1:string, animal2: string, animal3:string, animal4: string, animal5: string,){
        super();
        this.Animal1 = animal1;
        this.Animal2 = animal2;
        this.Animal3 = animal3;
        this.Animal4 = animal4;
        this.Animal5 = animal5;
    }
}
 let animaldomestico = new AnimalDomestico ("Gato", "Perro", "Loro", "Caballo","Pato");
 let animalsalvaje = new AnimalSalvaje ("Tigre","Leon","Puma","Oso","Tiburon");

 console.log (animaldomestico.Animal1, animaldomestico.Animal2, animaldomestico.Animal3, animaldomestico.Animal4, animaldomestico.Animal5 );
 console.log (animalsalvaje.Animal1, animalsalvaje.Animal2, animalsalvaje.Animal3, animalsalvaje.Animal4, animalsalvaje.Animal5);