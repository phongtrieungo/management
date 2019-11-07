import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public tenant$: Observable<any[]>;
    public tenantForm: FormGroup;

    constructor(private database: AngularFirestore, private fb: FormBuilder) { }

    ngOnInit() {
        // this.tenant$ = this.database.colection('tenants').valueChanges();

        this.tenantForm = this.fb.group({
            socialId: ['', Validators.required],
            tenantFirstName: ['', Validators.required],
            tenantLastName: ['', Validators.required],
            gender: ['', Validators.required]
        });
    }

    onSubmit() {
        console.log(this.tenantForm.value);
    }
}
