import { TestBed } from '@angular/core/testing';

import { ServicioTransaccionService } from './servicio-transaccion.service';

describe('ServicioTransaccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioTransaccionService = TestBed.get(ServicioTransaccionService);
    expect(service).toBeTruthy();
  });
});
