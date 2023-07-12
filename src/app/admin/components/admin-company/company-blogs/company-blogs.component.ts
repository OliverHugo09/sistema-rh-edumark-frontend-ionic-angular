import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Blog } from '../../../../interface/blog';

let empresaIdNumerico = localStorage.getItem('empresaId');
let empresaId = parseInt(empresaIdNumerico);

@Component({
  selector: 'app-company-blogs',
  templateUrl: './company-blogs.component.html',
  styleUrls: ['./company-blogs.component.scss'],
})
export class CompanyBlogsComponent implements OnInit {
  blogContent: string;

  blog: Blog = {
    id: null,
    content: '',
    entidadId: null,
    empresaId: 0,
  }

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  createBlog() {
    const sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.blogContent);
    console.log(sanitizedContent)
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
}
