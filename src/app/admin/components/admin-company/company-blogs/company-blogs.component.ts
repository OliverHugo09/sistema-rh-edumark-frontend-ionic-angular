import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Blog } from '../../../../interface/blog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Options } from 'ngx-quill-upload';

import Quill from 'quill';
import ImageUploader from 'quill-image-uploader';
import { ImageHandler, VideoHandler } from 'ngx-quill-upload';

Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/imageHandler', ImageHandler);
Quill.register('modules/videoHandler', VideoHandler);

let empresaIdNumerico = localStorage.getItem('empresaId');
let empresaId = parseInt(empresaIdNumerico);

@Component({
  selector: 'app-company-blogs',
  templateUrl: './company-blogs.component.html',
  styleUrls: ['./company-blogs.component.scss'],
})
export class CompanyBlogsComponent implements OnInit {
  blogContent: string;
  modules: any;
  editor: Quill;
  blogForm: FormGroup;

  blog: Blog = {
    id: null,
    content: '',
    entidadId: null,
    empresaId: 0,
    title: '',
    description: ''
  };

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    this.editor.on('text-change', () => {
      this.blogContent = this.editor.root.innerHTML;
    });
  }

  ngOnInit() {
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'font': [] }],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      // Configura el módulo imageHandler para subir imágenes
      imageHandler: {
        upload: (file: File) => {
          return new Promise<string>((resolve, reject) => {
            const formData = new FormData();
            formData.append('upload', file);

            // Realiza una solicitud HTTP para cargar la imagen al servidor
            this.http.post(environment.API_URL + 'upload-image', formData)
              .subscribe((response: any) => {
                // Obtiene la URL de la imagen desde la respuesta del servidor
                const imageUrl = response.imageUrl;

                // Verifica que la URL de la imagen esté definida
                if (imageUrl) {
                  // Inserta la imagen en el editor
                  const range = this.editor.getSelection(true);
                  this.editor.insertEmbed(range.index, 'image', imageUrl, 'user');

                  // Resuelve la promesa con la URL de la imagen
                  resolve(imageUrl);
                } else {
                  reject('Error al cargar la imagen');
                }
              }, (error) => {
                console.error('Error al cargar la imagen', error);
                reject('Error al cargar la imagen');
              });
          });
        },
      } as Options,
    };

    this.editor = new Quill('#editor', {
      modules: this.modules,
    });

    this.editor.on('editor-change', (event: any) => {
      if (event.source === 'user' && event.delta) {
        const hasImageDelta = event.delta.ops.some((op: any) => op.insert && op.insert.image);
        if (!hasImageDelta) {
          this.blogContent = this.editor.root.innerHTML;
        }
      }
    });

    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  createBlog() {
    const sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.blogContent);
    console.log(sanitizedContent);
    const blogData = {
      content: sanitizedContent["changingThisBreaksApplicationSecurity"],
      empresaId: empresaId
    };

    this.http.post(`${environment.API_URL}blog`, blogData)
      .subscribe(response => {
        console.log('Blog creado exitosamente', response);
      }, error => {
        console.error('Error al crear el blog', error);
      });
  }

  createBlog2() {
    this.blogForm.markAllAsTouched();

    if (this.blogForm.invalid) {
      // Si el formulario es inválido, muestra un mensaje de error o realiza alguna acción apropiada
      return;
    }

    const blogData = {
      title: this.blogForm.value.title,
      description: this.blogForm.value.description,
      content: this.blogContent,
      empresaId: empresaId,
      // Otros datos del blog
    };

    this.http.post(`${environment.API_URL}blog`, blogData)
      .subscribe(response => {
        console.log('Blog creado exitosamente', response);
      }, error => {
        console.error('Error al crear el blog', error);
      });
  }
}
