import {Either, Left, Right} from "../containers";

/**
 * Выводим ошибку
 * @param either
 */
export const showError = (either: Left | Right) => {
    if (either.isLeft) {
        alert(either.$value);
    }
}