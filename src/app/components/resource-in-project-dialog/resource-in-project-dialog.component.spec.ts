import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceInProjectDialogComponent } from './resource-in-project-dialog.component';

describe('ResourceInProjectDialogComponent', () => {
  let component: ResourceInProjectDialogComponent;
  let fixture: ComponentFixture<ResourceInProjectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceInProjectDialogComponent]
    });
    fixture = TestBed.createComponent(ResourceInProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
