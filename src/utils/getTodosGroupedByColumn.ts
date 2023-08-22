import { database } from "@/lib/Appwrite"

export const getTodosGroupedByColumn = async () => {
    const data = await database.listDocuments(process.env.NEXT_PUBLIC_DATABASEID!, process.env.NEXT_PUBLIC_TODOS_COLLEACTN_ID!)

    const todos = data.documents
    const columns = todos.reduce((acc, todo) => {
        if (!acc.get(todo.Status)) {
            acc.set(todo.Status, {
                id: todo.Status,
                todos: []
            })
        }
        acc.get(todo.Status)?.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.Status,
            ...(todo.image && { image: JSON.parse(todo.image) })
        })
        return acc
    }, new Map<TypeColumn, Column>())

    const columnTypes: TypeColumn[] = ["Todo", "In-Progress", "Done"]

    for (const TypeColumn of columnTypes) {
        if (!columns.get(TypeColumn)) {
            columns.set(TypeColumn, {
                id: TypeColumn,
                todos: []
            })
        }
    }
    const sortedColumn = new Map(
        Array.from(columns.entries()).sort(
            (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
        )
    );
    const board: Board = {
        columns: sortedColumn
    }
    return board
}
