import { useEffect } from "react";

    const usePageUnloadWarning = (shouldWarn:boolean) => {
        useEffect(() => {
            const handleBeforeUnload = (event:BeforeUnloadEvent) => {
                console.log(event)
                if (shouldWarn) {
                    const message = "sdgas";
                    event.preventDefault()
                    event.returnValue = message;
                    return message;
                }
            };

            window.addEventListener("beforeunload", handleBeforeUnload);
            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }, [shouldWarn]);
    };

export default usePageUnloadWarning;
