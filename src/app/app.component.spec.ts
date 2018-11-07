import { TestBed, async, } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './directives/test-directive.directive';
import { By } from '@angular/platform-browser';
import { TestMockService} from './services/test-mock.service';

/**
 * describe est un jeu de tests du composant
 * AppComponent
 * On ajoute les éléments du composants
 * associés exemples :
 *  Directice, Pipe Perso, Service
 */
describe('AppComponent', () => {
  //Bouchonnage dans un composant
  let testService : TestMockService;
  /**
   * Cette fonction est exécutée avant
   *  chaque lancement de test
   */
  beforeEach(async(() => {
    let mockTestSercice = {
      NomService : 'M2i Mock',
      doSomething : () => {return 5;}
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestDirectiveDirective
      ],
      providers : [{ provide:TestMockService, useValue:mockTestSercice}]
    }).compileComponents();

    testService = TestBed.get(TestMockService);
  }));

  /**
   * Modifier le composant app
   * Modifier app.components.ts et HTML
   * Pour récupérer le app.getNameService() dans la vue HTML
   */
  it('Test NameService Van', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getNameService()).toEqual('M2i Mock');
   
  }));

  /**
   * Modifier le composant app
   * Modifier app.components.ts et HTML
   * Pour récupérer le app.getNameService() dans la vue HTML
   */
  it('Test NameService Formateur', async(() => {
    //Création du composant
    const fixture = TestBed.createComponent(AppComponent);
    //chargement total du composant
    fixture.detectChanges();
    //Récupération du composant en que TS
    //const app = fixture.debugElement.component.componentInstance
    //récupération du DOM du template du composant
    const compiled = fixture.debugElement.nativeElement;
    //test de l'id avec le nom du service ("Mocker" ou "bouchonner")
    expect(
      compiled.querySelector('#service').textContent).
      toContain(testService.NomService);

  }));

  /**
   * test du bonchonnage dans le composant
   */
  it('Test mockService', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(testService).toBeTruthy();
    expect(testService.NomService).toEqual('M2i Mock') ; //Est ce qu'il est différent de Null
  }));


  it('should create the app', () => {
    /**
     * Test si le composant ce charge bien
     * (instance de l'objet)
     */
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); //Est ce qu'il est différent de Null
  });

  it(`should have as title 'projettests'`, () => {
    /**
     * Test pour vérifier les valeurs par défauts
     * des propriétés du composant.
     */
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('projet des tests IT');
    expect(app.author).toEqual('cge');
    expect(app.version).toEqual(1.0);
  });

  it('should render title in a h1 tag', () => {
    /**
     * test h1 h2
     */
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('h1').textContent).
      toContain('Welcome to projet des tests IT!');
      expect(
        compiled.querySelectorAll('h1').length).
        toEqual(2);
        
  });
 /**
  * 
  */
  it('It\'s the directive with the value = M2I', async(() => {
    let fixture = TestBed.createComponent(AppComponent) ;
    fixture.detectChanges() ;
    //test si j'ai une balise h2 et si elle contient : "Test de la directive :"
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('h2').textContent).
      toContain('Test de la directive :');
      expect(
        compiled.querySelectorAll('h2').length).
        toEqual(1);
    let directiveEl =
    fixture.debugElement.query(By.directive(TestDirectiveDirective)) ;
    expect(directiveEl).not.toBeNull() ;
    let directiveInstance = directiveEl.injector.get(TestDirectiveDirective) ;
    expect(directiveInstance.value).toBe('M2i') ;
    })) ;
});


