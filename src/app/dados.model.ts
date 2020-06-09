export class Confirmados {
    total: string = '';
    titulo: string = '';
    novos: number;
    incidencia: string;
    recuperados: number;
    acompanhamento: string;
    percent: string;
}

export class Obitos {
    total: string;
    titulo: string;
    novos: number;
    incidencia: string;
    letalidade: string;
    mortalidade: string;
    percent: string;

}

export class Dados {
    confirmados: Confirmados[];
    obitos: Obitos[];

}