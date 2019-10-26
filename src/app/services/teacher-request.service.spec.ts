import { TestBed } from '@angular/core/testing';

import { TeacherRequestService } from './teacher-request.service';

describe('TeacherRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherRequestService = TestBed.get(TeacherRequestService);
    expect(service).toBeTruthy();
  });
});
