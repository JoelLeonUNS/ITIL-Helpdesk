import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ParametroPaginado } from '../../interfaces/utilidades/parametro-paginado';
import { HttpClient } from '@angular/common/http';

export abstract class ServicioCrud<T> {
  protected constructor(
    protected http: HttpClient,
    protected API_URL: string
  ) {}

  protected getStorage(): T[] {
    const key = this.API_URL.split('/').pop();
    const data = localStorage.getItem(key ?? '');
    return data ? JSON.parse(data) : [];
  }

  protected setStorage(data: T[]): void {
    const key = this.API_URL.split('/').pop();
    localStorage.setItem(key ?? '', JSON.stringify(data));
  }

  obtenerTodos(): Observable<T[]> {
    return of(this.getStorage()).pipe(delay(100));
  }

  obtenerTodosConNombre(): Observable<any[]> {
    // Implementa según tus necesidades
    return this.obtenerTodos();
  }

  obtenerPorId(id: number): Observable<T | null> {
    const item = this.getStorage().find((i) => (i as any).id === id);
    return of(item || null).pipe(delay(100));
  }

  crear(data: T): Observable<T> {
    const items = this.getStorage();
    const newItem = { ...data, id: this.getNextId() };
    items.push(newItem);
    this.setStorage(items);
    return of(newItem).pipe(delay(100));
  }

  actualizar(id: number, data: T): Observable<T | null> {
    let items = this.getStorage();
    const index = items.findIndex((i) => (i as any).id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...data };
      this.setStorage(items);
      return of(items[index]).pipe(delay(100));
    }
    return of(null).pipe(delay(100));
  }

  parcialActualizar(id: number, data: any): Observable<any> {
    let items = this.getStorage();
    const index = items.findIndex((i) => (i as any).id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...data };
      this.setStorage(items);
      return of(items[index]).pipe(delay(100));
    }
    return of(null).pipe(delay(100));
  }

  eliminar(id: number): Observable<any> {
    let items = this.getStorage();
    items = items.filter((i) => (i as any).id !== id);
    this.setStorage(items);
    return of({ success: true }).pipe(delay(100));
  }

  cambiarEstado(id: number, data: any): Observable<any> {
    return this.actualizar(id, data);
  }

  obtenerActivos(): Observable<T[]> {
    const items = this.getStorage().filter((i) => (i as any).estado === 1);
    return of(items).pipe(delay(100));
  }

  obtenerUltimaId(): Observable<any> {
    const items = this.getStorage();
    const lastId =
      items.length > 0 ? Math.max(...items.map((i) => (i as any).id)) : 0;
    return of({ id: lastId }).pipe(delay(100));
  }

  obtenerTodoPag(p: ParametroPaginado, query?:any[]): Observable<any> {
    let items: any[] = this.getStorage();
    if (query) {items = query}
    
    // Aplicar búsqueda
    if (p.searchTerm && p.searchColumn) {
      items = items.filter((item) =>
        String(item[p.searchColumn!])
          .toLowerCase()
          .includes(p.searchTerm!.toLowerCase())
      );
    }

    // Aplicar filtros
    if (Array.isArray(p.filter) && p.filter.length > 0) {
      items = items.filter((item) =>
        p.filter.every((f) => {
          if (Array.isArray(f.value)) {
            return f.value.includes(item[f.key]);
          } else if (f.value) {
            return item[f.key] === f.value;
          } else {
            return item;
          }
        })
      );
    }

    // Aplicar ordenamiento
    if (p.sortField && p.sortOrder) {
      items.sort((a, b) => {
        const aValue = a[p.sortField!];
        const bValue = b[p.sortField!];

        // Comprobar si los valores son números
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return p.sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }

        // Si no son números, convertir a strings y comparar
        const aString = String(aValue).toLowerCase();
        const bString = String(bValue).toLowerCase();

        if (aString < bString) return p.sortOrder === 'asc' ? -1 : 1;
        if (aString > bString) return p.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Calcular índices para la paginación
    const startIndex = (p.pageIndex - 1) * p.pageSize;
    const endIndex = startIndex + p.pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);

    return of({
      data: paginatedItems,
      total: items.length,
    }).pipe(delay(100)); // Simular retraso de red
  }

  private getNextId(): number {
    const items = this.getStorage();
    return items.length > 0
      ? Math.max(...items.map((i) => (i as any).id)) + 1
      : 1;
  }
}
