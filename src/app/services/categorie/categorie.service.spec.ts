import { TestBed } from '@angular/core/testing';

import { CategorieService } from './categorie.service';


  
describe('AjouterCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorieService = TestBed.get(CategorieService);
    expect(service).toBeTruthy();
  });
});
