import { Component } from '@angular/core';
import * as QuillNameSpace from 'quill';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  quillValue;
  emptyArray = [];
  defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      
      [{ 'indent': '-1'}, { 'indent': '+1' }],          
      [{ 'direction': 'rtl' }],                         
      [{ 'size': ['10px', false, '18px', '32px'] }],  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ color: this.emptyArray.slice() },{ background: this.emptyArray.slice() }],        
      [{ 'font': [' sans-serif', 'monospace', 'serif']}],
      [{ 'align': '' }],
      ['clean'],                                         
      ['link', 'image', 'video']                        
    ]
  };
  constructor(){
    var quill:any = QuillNameSpace;
    const Parchment = quill.import('parchment');
    var Block = Parchment.query('block');
    Block.tagName = 'DIV';
    quill.register(Block, true);
    //size
    var SizeStyle = quill.import( 'attributors/style/size' );
    SizeStyle.whitelist =  ['10px', false, '18px', '32px'];
    quill.register( SizeStyle, false );
    //style
    var FontStyle = quill.import('attributors/style/font');
    FontStyle.whitelist = [' sans-serif', 'monospace', 'serif'];
    quill.register(FontStyle, true);
    
    var AlignStyle = quill.import('attributors/style/align');
    quill.register(AlignStyle, true);

  }

  getQuillValue(){
    alert(this.quillValue);
  }
}
