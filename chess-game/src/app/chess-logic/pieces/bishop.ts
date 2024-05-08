import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class Bishop extends Piece {
    protected override _FENCHAR: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },

    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENCHAR = pieceColor === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
    }
}