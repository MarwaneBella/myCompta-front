import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
  Self,
  Optional
} from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[appAllowInput]"
})
export class AllowInputDirective {
  inputElement: ElementRef;

        @Input() 
        allow: 'integer'| 'float';
        // arabicRegex = '[\u0600-\u06FF]';

        constructor(el: ElementRef) {
            this.inputElement = el;
        }

        @HostListener('keypress', ['$event']) onKeyPress(event :any) {
            if (this.allow === 'integer') {
                this.integerOnly(event);
            } else if (this.allow === 'float') {
                this.floatOnly(event);
            }
        }

        integerOnly(event :any){
          const e = <KeyboardEvent>event;
          if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
            e.preventDefault();
          }
        }

        floatOnly(event :any) {
            const e = <KeyboardEvent>event;
            if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.'].indexOf(e.key) === -1 ) {
                e.preventDefault();
            }
        }

        

        // noSpecialChars(event : any) {
        //     const e = <KeyboardEvent>event;
        //     if (e.key === 'Tab' || e.key === 'TAB') {
        //         return;
        //     }
        //     let k;
        //     k = event.keyCode;  // k = event.charCode;  (Both can be used)
        //     if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57)) {
        //         return;
        //     }
        //     const ch = String.fromCharCode(e.keyCode);
        //     const regEx = new RegExp(this.arabicRegex);
        //     if (regEx.test(ch)) {
        //         return;
        //     }
        //     e.preventDefault();
        // }

        @HostListener('paste', ['$event']) onPaste(event:any) {
          const e = <ClipboardEvent>event;
          e.preventDefault();
        //   let regex;
        //   if (this.appInputRestriction === 'integer') {
        //       regex = /[0-9]/g;
        //   } else if (this.appInputRestriction === 'noSpecialChars') {
        //       regex = /[a-zA-Z0-9\u0600-\u06FF]/g;
        //   }
          
          
        //   if(e.clipboardData){
        //   const pasteData = e.clipboardData.getData('text/plain');
        //   let m;
        //   let matches = 0;
        //   if(regex)
        //   while ((m = regex.exec(pasteData)) !== null) {
        //       // This is necessary to avoid infinite loops with zero-width matches
        //       if (m.index === regex.lastIndex) {
        //           regex.lastIndex++;
        //       }
        //       // The result can be accessed through the `m`-variable.
        //       m.forEach((match, groupIndex) => {
        //           matches++;
        //       });
        //   }
        //   if (matches === pasteData.length) {
        //       return;
        //   } else {
        //       e.preventDefault();
        //   }
        // }
      }

}
