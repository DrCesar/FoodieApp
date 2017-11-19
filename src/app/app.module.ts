import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { InicioPage } from '../pages/inicio/inicio';
import { PedidoActualPage } from '../pages/pedido-actual/pedido-actual';
import { PedidoAnteriorPage } from '../pages/pedido-anterior/pedido-anterior';
import { RestaurantesCercanosPage } from '../pages/restaurantes-cercanos/restaurantes-cercanos';
import { CategorAsPage } from '../pages/categor-as/categor-as';
import { PedidosRecientesPage } from '../pages/pedidos-recientes/pedidos-recientes';
import { PlatosPage } from '../pages/platos/platos';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { LoginPage } from '../pages/login/login';
import { CrearNuevaCuentaPage } from '../pages/crear-nueva-cuenta/crear-nueva-cuenta';
import { AcercaDeFoodiePage } from '../pages/acerca-de-foodie/acerca-de-foodie';
import { RecuperarContraseAPage } from '../pages/recuperar-contrase-a/recuperar-contrase-a';
import { ResultadosDeBSquedaPage } from '../pages/resultados-de-bsqueda/resultados-de-bsqueda';
import { PlatoPage } from '../pages/plato/plato';
import { PerfilPage } from '../pages/perfil/perfil';
import { PagoPage } from '../pages/pago/pago';
import { ViewordersPage } from '../pages/vieworders/vieworders';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InformationProvider } from '../providers/information/information';
import { UserProvider } from '../providers/user/users';
import { OrderProvider } from '../providers/user/order';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    InicioPage,
    PedidoActualPage,
    PedidoAnteriorPage,
    RestaurantesCercanosPage,
    CategorAsPage,
    PedidosRecientesPage,
    PlatosPage,
    RestaurantesPage,
    LoginPage,
    CrearNuevaCuentaPage,
    AcercaDeFoodiePage,
    RecuperarContraseAPage,
    ResultadosDeBSquedaPage,
    PlatoPage,
    PerfilPage,
    PagoPage,
    ViewordersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    InicioPage,
    PedidoActualPage,
    PedidoAnteriorPage,
    RestaurantesCercanosPage,
    CategorAsPage,
    PedidosRecientesPage,
    PlatosPage,
    RestaurantesPage,
    LoginPage,
    CrearNuevaCuentaPage,
    AcercaDeFoodiePage,
    RecuperarContraseAPage,
    ResultadosDeBSquedaPage,
    PlatoPage,
    PerfilPage,
    PagoPage,
    ViewordersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InformationProvider,
    UserProvider,
    OrderProvider
  ]
})
export class AppModule {}
