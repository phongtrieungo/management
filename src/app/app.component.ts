import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'management';
    public tenant$: Observable<any[]>;

    constructor(private database: AngularFirestore) { }

    ngOnInit() {
        this.tenant$ = this.database.collection('tenants').valueChanges();
    }
}
