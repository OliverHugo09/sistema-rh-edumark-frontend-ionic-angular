import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../../../interface/blog';

const API_URL = environment.API_URL + 'blog';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})
export class BlogCompanyService {

    constructor(private http: HttpClient) { }

    getBlog(id: number): Observable<Blog> {
        return this.http.get<Blog>(`${API_URL}${id}`)
    }

    getBlogs(id: number): Observable<Blog[]> {
        return this.http.get<Blog[]>(`${API_URL}${id}`, httpOptions);
    }

    addBlog(entity: Blog): Observable<any> {
        return this.http.post(API_URL, entity, httpOptions);
    }

    updateBlog(id: number, entity: Blog): Observable<any> {
        return this.http.put(`${API_URL}${id}`, entity, httpOptions);
    }

    deleteBlog(id: number) {
        return this.http.delete(`${API_URL}${id}`, httpOptions);
    }

}