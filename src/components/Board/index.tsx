'use client'
import { DragDropContext, Droppable, } from 'react-beautiful-dnd';

type Props = {}

export const Board = (props: Props) => {
    return (
        <DragDropContext>
            <Droppable droppableId='board' direction='horizontal' type='column'>
                {(private) => (
                    <div>

                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Board
