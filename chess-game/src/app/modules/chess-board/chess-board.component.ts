import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board/chess-board';
import { Color, FENChar } from '../../chess-logic/models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [NgFor],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})

export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color { return this.chessBoard.playerColor; };
}
