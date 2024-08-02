export class Generations {
    private readonly _id: number;
    private readonly _gen: string;
    // private readonly _image: string;

    constructor(id: number, gen: string) { //, image: string
        this._id = id;
        this._gen = gen;
        // this._image = image;
    }

    public get id(): number {
        return this._id;
    }

    public get gen(): string {
        return this._gen;
    }

    // public get image(): string {
    //     return this._image;
    // }

}