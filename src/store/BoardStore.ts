
import { getTodosGroupedByColumn } from '@/utils/getTodosGroupedByColumn';
import { create } from 'zustand'

interface BoardState {
    board: Board,
    getBoard: () => Promise<void>
}



export const useBoardStore = create<BoardState>((set) => ({

    board: {
        columns: new Map<TypeColumn, Column>(),
    },
    getBoard: async () => {
        const board = await getTodosGroupedByColumn();
        set({ board })
    }
}))
