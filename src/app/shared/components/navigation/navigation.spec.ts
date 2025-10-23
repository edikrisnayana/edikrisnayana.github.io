import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Navigation } from './navigation';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [Navigation],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu', () => {
    expect(component['isMenuOpen']()).toBeFalse();
    component.toggleMenu();
    expect(component['isMenuOpen']()).toBeTrue();
    component.toggleMenu();
    expect(component['isMenuOpen']()).toBeFalse();
  });

  it('should close menu', () => {
    component.toggleMenu();
    expect(component['isMenuOpen']()).toBeTrue();
    component.closeMenu();
    expect(component['isMenuOpen']()).toBeFalse();
  });
});
