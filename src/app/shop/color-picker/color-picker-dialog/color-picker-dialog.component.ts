import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';


export interface ColorDialogData {
  color: string;
}

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.scss']
})
export class ColorPickerDialogComponent implements OnInit {
  @Output() recolor = new EventEmitter();
  color = '#fff';

  public defaultColors: string[] = [
    'white',
    'tomato',
    'hotpink',
    'coral',
    'gold',
    'greenyellow',
    'lightgreen',
    'turquoise',
    'skyblue',
    'royalblue',
    'plum',
  ];

  // TODO: #11. Announce changes with LiveAnnouncer
  constructor(
    public dialogRef: MatDialogRef<ColorPickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ColorDialogData,
    private liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void { }

  public changeColor(color: string): void {
    if (color) {
      this.recolor.emit(color);
    }
    // TODO: #11. Announce changes with LiveAnnouncer
    this.liveAnnouncer.announce(`Select color: ${color}`);
    this.dialogRef.close();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
