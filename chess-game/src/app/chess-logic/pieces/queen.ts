import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class Queen extends Piece {
    protected override _FENCHAR: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: -1, y: -1 },
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: 1, y: -1 },
    ]

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENCHAR = pieceColor === Color.White ? FENChar.WhiteQueen : FENChar.BlackQueen;
    }
}