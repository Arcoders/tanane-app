import { DEFAULT_ERROR_MESSAGE } from "../commons/constants";

export async function fetchUrl<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorResponse = await response.text();
            throw new Error(errorResponse|| DEFAULT_ERROR_MESSAGE);
        }

        return await response.json();

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : DEFAULT_ERROR_MESSAGE);
    }
}