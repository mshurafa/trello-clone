'use client'
import { useBoardStore } from '@/store/BoardStore';
import { useEffect, useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { Column } from '@/components/columns';

type Props = {}

export const Board = (props: Props) => {
    const [board, getBoard] = useBoardStore((state) => [
        state.board,
        state.getBoard
    ]);
    useEffect(() => {
        getBoard();
    }, [getBoard])

    console.log(board);

    const handleOnDragEnd = (result: DropResult) => {

    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='board' direction='horizontal' type='column'>
                {(provided) => (
                    <div
                        className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {board && Array?.from(board?.columns?.entries())?.map(([typesId, column], index) => (
                            <Column
                                key={typesId}
                                typesId={typesId}
                                index={index}
                                todos={column.todos}
                            />
                        ))}
                        {/* {Array.from(board.columns.entries()).map(([id, column], index) => (
                            <div key={index}>{column.todos.map((todo) => (
                                <div key={todo.$id}>
                                    {todo.title}
                                </div>
                            ))}</div>
                        ))} */}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Board
