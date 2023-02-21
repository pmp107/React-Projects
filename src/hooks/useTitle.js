/**
* objective: Custom hook to change page title based on selected category.
* Date Created:
* Modified:
*/
import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / Cinemate`;
    });

  return null;
}
