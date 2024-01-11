import fetchBoard from "../../componentScripts/fetchBoard";
import {useEffect, useState} from "react";
import {Box} from "@chakra-ui/react";

interface BoardColumn {
    id: number;
    name: string;
}

interface Board {
    title: string;
    column: BoardColumn[];
}

const KanbanBoardComponent = () => {
    const [board, setBoard] = useState<Board>({title: '', column: []});

    useEffect(() => {
        const getBoard = async () => {
            try {
                const board = await fetchBoard();
                setBoard(board);
            } catch (error) {
                console.error('Error fetching board:', error);
            }
        };
        getBoard();
    }, []);

    return (
        // tutaj zrobie to lepiej jeszcze <Gridami> ale juz nie mam czasu
        <Box padding={"10px"} display={"flex"} justifyContent={'center'}>
            <table>
                <caption>{board.title}</caption>
                <thead>
                <tr>
                    {board.column.map((boardColumn) => (
                        <th key={boardColumn.id}>{boardColumn.id}</th>
                    ))}
                    Column name
                </tr>
                </thead>

                <tbody>
                {/*i guess tutaj generowanie karteczek, tylko pytanie czy chcemy dzielić po prostu na 3 kolumny}*/}
                {/*czy nawet mamy interes żeby na rzędy dzielić jeszcze i rozróżniać? }}*/}
                Karteczki type tekst
                </tbody>
            </table>
        </Box>
    );
}

export default KanbanBoardComponent;
