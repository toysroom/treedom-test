import { useWizardContext } from "../contexts/WizardContext"
import { WizardNext, WizardPrev } from '../App';

function Step3() {

    const { state } = useWizardContext();
    
    return (
        <div className="container">
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <WizardPrev />
            <WizardNext />
        </div>
    )
}

export default Step3;