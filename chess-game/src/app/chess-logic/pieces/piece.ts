import { FENChar, Coords, Color } from "../models";

export abstract class Piece {
    protected abstract _FENCHAR: FENChar;
    protected abstract _directions: Coords[];

    constructor(private _color: Color) { }

    public get FENChar(): FENChar {
        return this._FENCHAR;
    }

    public get directions(): Coords[] {
        return this._directions;
    }

    public get color(): Color {
        return this._color;
    }
}