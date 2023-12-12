import axios from 'axios';

const fetchBoard = async () => {
    try {
        const response = await axios.get('/api/getBoard'); // tutaj do edycji jak tam będzie w sql
        return response.data.board;
    } catch (error) {
        console.error('Error fetching boardName:', error);
        throw error;
    }
};

export default fetchBoard;