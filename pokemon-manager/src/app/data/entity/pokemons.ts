export class Pokemons {
    private readonly _id: number;
    private readonly _nom: string;
    private readonly _image: string;
    private readonly _type: string;
    private readonly _taille: number; // en mètres
    private readonly _poids: number; 
    private readonly _gen: number;

    constructor(id: number, nom: string, image: string, type:string, taille: number, poids: number, gen:number) {
        this._id = id;
        this._nom = nom;
        this._image = image;
        this._type = type;
        this._taille = taille;
        this._poids = poids;
        this._gen = gen;
    }

    public get id(): number {
        return this._id;
    }

    public get nom(): string {
        return this._nom;
    }

    public get image(): string {
        return this._image;
    }

    public get type(): string {
        return this._type;
    }

    public get taille(): number {
        return this._taille;
    }

    public get poids(): number {
        return this._poids;
    }

    public get gen(): number {
        return this._gen;
    }
}