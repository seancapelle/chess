import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board/chess-board';
import { Color, Coords, FENChar, pieceImagePaths } from '../../chess-logic/models';
import { CommonModule, NgFor } from '@angular/common';
import { SelectedSquare } from './models';
import { SafeSquares } from '../../chess-logic/models';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})

export class ChessBoardComponent {
  public pieceImagePaths = pieceImagePaths;

  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color { return this.chessBoard.playerColor; };
  public get safeSquares(): SafeSquares { return this.chessBoard.safeSquares; };

  private selectedSquare: SelectedSquare = { piece: null };
  private pieceSafeSquares: Coords[] = [];

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }

  public isSquareSelected(x: number, y: number): boolean {
    if (!this.selectedSquare.piece) return false

    return this.selectedSquare.x === x && this.selectedSquare.y === y;
  }

  public isSquareSafeForSelectedPiece(x: number, y: number): boolean {
    return this.pieceSafeSquares.some(coords => coords.x === x && coords.y === y);
  }

  public selectingPiece(x: number, y: number): void {
    const piece: FENChar | null = this.chessBoardView[x][y];

    if (!piece) return;

    this.selectedSquare = { piece, x, y };
    this.pieceSafeSquares = this.safeSquares.get(x + "," + y) || [];
  }
}
