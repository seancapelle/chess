import { Piece } from "./pieces/piece";
import { Color, LastMove } from "./models";

export class FENConverter {

    public convertBoardToFEN(
        board: (Piece | null)[][],
        playerColor: Color,
        lastMove: LastMove | undefined,
        fiftyMoveRuleCounter: number,
        numberOfFullMoves: number,
    ): string {
        let FEN: string = "";

        for (let i = 7; i >=0; i--) {
            let FENRow: string = "";
            let consecutiveEmptySquaresCounter = 0;

            for (const piece of board[i]) {
                if (!piece) {
                    consecutiveEmptySquaresCounter++;
                    continue;
                }

                if (consecutiveEmptySquaresCounter !== 0) {
                    FENRow += String(consecutiveEmptySquaresCounter);
                }

                consecutiveEmptySquaresCounter = 0;
                FENRow += piece.FENChar;
            }

            if (consecutiveEmptySquaresCounter !== 0) {
                FENRow += String(consecutiveEmptySquaresCounter);
            }

            FEN += (i === 0) ? FENRow : FENRow + "/";
        }

        const player: string = playerColor === Color.White ? "w" : "b";

        return FEN;
    }

    // private castlingAvailability(board: (Piece | null)[][]): string {
        
    // }
}