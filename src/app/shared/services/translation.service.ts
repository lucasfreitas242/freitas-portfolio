import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {}

  init() {
    this.translate.setDefaultLang('en'); // Defina o idioma padrão
    this.translate.use('en'); // Use o idioma padrão
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
