import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoComponent } from './produto.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],

      declarations: [ ProdutoComponent ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
