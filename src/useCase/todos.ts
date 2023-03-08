import {getJSON} from "./helpers/getJSON";

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () => getJSON(todosUrl)