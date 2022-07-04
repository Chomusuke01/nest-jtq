
export class Pageable {

    pageNumber: number = 1;
    pageSize: number;
    sort: any; // igual no hace falta

    constructor(){ //Constructor solo para probar, esto se borrará
        this.pageNumber += 1;
        this.pageSize = 3;
    }

    getPageNumber(): number {
        return this.pageNumber;
    }

    setPageNumber(pageNumber: number): void {
        this.pageNumber = pageNumber;
    }

    getPageSize(): number {
        return this.pageSize;
    }

    setPageSize(pageSize: number): void {
        this.pageSize = pageSize;
    }

    getSort(): any {
        return this.sort;
    }

    setSort(sort: any): void {
        this.sort = sort;
    }
}