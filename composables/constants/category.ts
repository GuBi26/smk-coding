export const category: Category[] = [
    {
        id: 1,
        name: "Appetizer",
    },
    {
        id: 2,
        name: "Main Course",
    },
    {
        id: 3,
        name: "Dessert",
    },
]
export interface Category {
    id?: number,
    name?: string,
}