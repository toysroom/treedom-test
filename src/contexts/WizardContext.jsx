import { useContext, useState, useRef, createContext } from "react";
import { isMobile } from 'react-device-detect';
import Step1 from "../components/Step1"
import Step2 from "../components/Step2"
import Step3 from "../components/Step3"

const WizardContext = createContext({
    firstName: null,
    lastName: null,
    age: null,
    yearsOfExp: null,
});

export const WizardContextProvider = ({ children }) => {

    const steps = [
        {
          label: 'Step 1',
          component: <Step1 />
        },
        {
          label: 'Step 2',
          component: <Step2 />
        },
        {
          label: 'Step 3',
          component: <Step3 />
        },
    ];

    const [activeStep, setActiveStep] = useState(0);
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        yearsOfExp: '',
    });

    const handleSetState = (field) => {
        setState({
            ...state,
            ...field
        })
    }

    const [slider, setSlider] = useState(3);

    const handleNext = () => {
        setActiveStep( prevStep => prevStep + 1);
        if (isMobile) {
            slider.slickNext();
        }
    }

    const handlePrev = () => {
        setActiveStep( prevStep => prevStep - 1);
        if (isMobile) {
            slider.slickPrev();
        }
    }

    const ctx = {
        state,
        handleSetState,

        steps,
        numSteps: steps.length - 1,
        activeStep,

        handlePrev,
        handleNext,

        slider,
        setSlider
      };

    return (
        <WizardContext.Provider value={ ctx }>
            {children}
        </WizardContext.Provider>
    )
}

export const useWizardContext = () => useContext(WizardContext)