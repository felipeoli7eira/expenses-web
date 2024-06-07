import { useState, useEffect } from 'react'
import { useAppNavigationHookProps } from '../../interfaces/DefaultTemplateProps'

export default function useAppNavigation(): useAppNavigationHookProps {
    const [navigationIsOpen, setNavigationIsOpen] = useState<boolean>(false)

    function handleNavigationState(): void {
        setNavigationIsOpen(prevState => !prevState)
    }

    function addCtrlArrowKeyListener() {
        window.addEventListener('keydown', function(event) {
            if (event.ctrlKey) {
                if (event.key === 'ArrowLeft') {
                    setNavigationIsOpen(false)
                } else if (event.key === 'ArrowRight') {
                    setNavigationIsOpen(true)
                }
            }
        });
    }

    useEffect(() => {
        addCtrlArrowKeyListener()
    }, [])

    return {
        navigationIsOpen,
        handleNavigationState
    }
}
