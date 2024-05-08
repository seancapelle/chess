import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board/chess-board';
import { Color, FENChar, pieceImagePaths } from '../../chess-logic/models';
import { CommonModule, NgFor } from '@angular/common';

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

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }
}
