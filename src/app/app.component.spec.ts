import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(
          [{ path: '', component: MainComponent }, { path: '**', redirectTo: '', pathMatch: 'full' }]
        ),
        HttpClientTestingModule,
        MainComponent,
        AppComponent
      ],
    }).compileComponents();
  });

  it('create app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
