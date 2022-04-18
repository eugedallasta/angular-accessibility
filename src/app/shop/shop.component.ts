import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  quantity = 11;
  color = 'gold';

  // TODO: #7. Create selectable controls with Angular Material
  fillings: string[] = ['Bok Choy & Chili Crunch', 'Tofu & Mushroom', 'Chicken & Ginger', 'Impossible Meat & Spinach'];
  selectedFillings: string[] = [];

  // TODO: #11. Announce changes with LiveAnnouncer
  constructor(private liveAnnouncer: LiveAnnouncer) { }


  ngOnInit(): void { }

  counter(i: number): Array<number> {
    return new Array(i);
  }

  public changeColor(color: string): void {
    this.color = color;
  }

  fauxPurchase(): void {
    let flavor = '';
    this.selectedFillings.forEach(filling => {
      flavor = flavor + ' ' + filling;
    });

    const fakePurchase = `Purchase ${this.quantity} ${flavor}dumplings in the color ${this.color}!`;
    console.log(fakePurchase);
    // TODO: #11. Announce changes with LiveAnnouncer
    this.liveAnnouncer.announce(fakePurchase);
  }
}
