export enum GrupoAlimentar {
    GRUPO1 = 'Cereais, pães e tubérculos',
    GRUPO2 = 'Hortaliças',
    GRUPO3 = 'Frutas',
    GRUPO4 = 'Leguminosas',
    GRUPO5 = 'Carnes e ovos',
    GRUPO6 = 'Leite e derivados',
    GRUPO7 = 'Óleos e gorduras',
    GRUPO8 = 'Açúcares'
}

export class Alimento{
    nome: string;
    grupoAlimentar: GrupoAlimentar;
}
