import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image', () => {
    component.image = 'http://example.com/image.jpg';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.src).toBe('http://example.com/image.jpg');
  });

  it('should emit imageLoaded event', () => {
    const spy = jasmine.createSpy('imageLoaded');
    component.imageLoaded.subscribe(spy);
    component.setLoaded();
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should emit imageClicked event with toggled isSaved property', () => {
    const spy = jasmine.createSpy('imageClicked');
    component.imageClicked.subscribe(spy);
    component.isSaved = false;
    component.image = 'http://example.com/image.jpg';
    component.onClick();
    expect(spy).toHaveBeenCalledWith({
      image: 'http://example.com/image.jpg',
      isSaved: true,
    });
    component.onClick();
    expect(spy).toHaveBeenCalledWith({
      image: 'http://example.com/image.jpg',
      isSaved: false,
    });
  });
});
