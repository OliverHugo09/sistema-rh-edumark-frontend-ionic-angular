import { Component, OnInit } from '@angular/core';

import { BlogCompanyService } from '../../connection/api/blogs-company.service';
import { Blog } from '../../../interface/blog';

@Component({
  selector: 'app-mobile-card-blog',
  templateUrl: './mobile-card-blog.component.html',
  styleUrls: ['./mobile-card-blog.component.scss'],
})
export class MobileCardBlogComponent implements OnInit {
  blogs: Blog[];
  constructor(
    private blogService: BlogCompanyService
  ) { }

  ngOnInit() {
    // Obtén el empresaId del localStorage y conviértelo a número
    const empresaIdNumerico = localStorage.getItem('empresaId');
    const empresaId = parseInt(empresaIdNumerico);

    const entidadIdNumerico = localStorage.getItem('entidadId');
    const entidadId = parseInt(entidadIdNumerico);

    // Llama al servicio para obtener la lista de blogs
    this.blogService.getBlogByCompany(empresaId).subscribe(
      (blogs) => {
        this.blogs = blogs;
      },
      (error) => {
        console.error('Error al obtener la lista de blogs', error);
      }
    );

    // Llama al servicio para obtener la lista de blogs
    this.blogService.getBlogsByEntidad(entidadId).subscribe(
      (blogs) => {
        this.blogs = blogs;
      },
      (error) => {
        console.error('Error al obtener la lista de blogs', error);
      }
    );
  }
}