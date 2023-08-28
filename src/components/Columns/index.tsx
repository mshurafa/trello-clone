"use client"
import { Draggable, Droppable } from 'react-beautiful-dnd'

type Props = {
    typesId: TypeColumn,
    todos: Todo[],
    index: number

}

export const Column = ({ typesId, todos, index }: Props) => {
    return (
        <>
            <Draggable index={index} draggableId={typesId}>
                {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Droppable droppableId={index.toString()} type='card'>
                            {(provided, snapshot) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}
                                    className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"}`}
                                >
                                    <h2>{typesId}</h2>
                                </div>
                            )}
                        </Droppable>
                    </div >
                )}

            </Draggable >
        </>
    )
}

export default Column
