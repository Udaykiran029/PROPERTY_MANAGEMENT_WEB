import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBuildingCreationComponent } from './block-building-creation.component';

describe('BlockBuildingCreationComponent', () => {
  let component: BlockBuildingCreationComponent;
  let fixture: ComponentFixture<BlockBuildingCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockBuildingCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockBuildingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
