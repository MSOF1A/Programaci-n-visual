interface IFiguras{
    readonly idFiguras:number;
    numeroLados: string;
    numeroVertices: string;
    calcularPerimetro():void;
}
interface IFigurasGeometricas extends IFiguras{
    readonly idFiguraGeometrica:number;
    nombreFigura: string;
    perimetroFigura:number;
    clcularAreaFigura():void;
}
interface IFiguraasDiseño extends IFiguras{
    readonly idFigurasDiseño: number;
    dimensionFigura: string;
    calcularVolumenFigura():void;
}

class Triangulo implements IFigurasGeometricas{
    idFiguraGeometrica: number;
    idFiguras: number;
    nombreFigura: string;
    perimetroFigura: number;
    numeroLados: string;
    numeroVertices: string;
    clcularAreaFigura(): void {
        console.log("Method not implemented.");
    }
    calcularPerimetro(): void {
        console.log("Method not implemented.");
    }
    constructor(idfiguras: number, idfigurasgeometricas: number, nombre: string, perimetro: number, lados: string, vertices: string,){
        this.idFiguras = idfiguras;
        this.idFiguraGeometrica = idfigurasgeometricas; 
        this.nombreFigura = nombre;
        this.perimetroFigura = perimetro;
        this.numeroLados = lados;
        this.numeroVertices = vertices;
    }   
}
class elementoPresicion implements IFiguraasDiseño{
    idFigurasDiseño: number;
    idFiguras: number;
    dimensionFigura: string;
    numeroLados: string;
    numeroVertices: string;
    calcularVolumenFigura(): void {
        console.log("Method not implemented.");
    }
    calcularPerimetro(): void {
        console.log("Method not implemented.");
    }
    constructor(idfigurasdiseño: number, idfiguras: number, dimension: string, lados: string, vertices: string,){
        this.idFigurasDiseño = idfigurasdiseño;
        this.idFiguras = idfiguras;
        this.dimensionFigura = dimension;
        this.numeroLados = lados;
        this.numeroVertices = vertices;
    }

}