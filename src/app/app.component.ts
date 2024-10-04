import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seatCount: number = 1;
  bookedSeats: number[] = [];

  // Simulating booking seats logic
  bookSeats(): void {
    const seatsAvailable: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample available seats
    this.bookedSeats = seatsAvailable.slice(0, this.seatCount);
  }
}
