import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent implements OnInit {
    enable: boolean = true;
    count: number = 0;

    constructor() {
    }

    ngOnInit() {

    }

    onSubmit() {
    }

    onChange() {
        this.count++;
    }
}