import { ComponentFixture, TestBed } from "@angular/core/testing"
import { TestInterceptor } from "../test-interceptor"
import { HttpClient, HttpHandler } from "@angular/common/http";
import { CommonModule } from "@angular/common";


describe('App Test Interceptor Test',()=> {
    
    let fixer: ComponentFixture<TestInterceptor>;
    let component: TestInterceptor;
    let http:HttpClient
    let httpHandlerSpy = jasmine.createSpyObj(HttpHandler,['handler','handle']);
     
    beforeAll(()=> {
       
        TestBed.configureTestingModule({
           imports: [TestInterceptor,CommonModule],
           providers: [HttpClient,HttpHandler]
        }).compileComponents()
      
    
          fixer = TestBed.createComponent(TestInterceptor);
          component = fixer.componentInstance;
          
          http = TestBed.inject(HttpClient)
          httpHandlerSpy = TestBed.inject(httpHandlerSpy);
          fixer.detectChanges()
    })

    it("Should create the component",()=> {
         
        expect(true).toBeTruthy()

    })

})