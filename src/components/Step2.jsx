import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useWizardContext } from "../contexts/WizardContext"
import ErrorField from "./ErrorField";
import { WizardNext, WizardPrev } from '../App';
import { mockStep2 } from '../mocks/step2';


function Step2() {

    const { handleNext, handleSetState, state } = useWizardContext();

    const { register, control, handleSubmit, formState } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            age: state.age,
            yearsOfExp: state.yearsOfExp,
        }
    });

    const { errors } = formState;

    const onSubmit = (data) => {
        handleNext();
        handleSetState(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                    Age:
                    <input
                        type="number"
                        {...register('age', {
                            required: 'Age is required',
                            validate: {
                                more18: async (fieldValue) => {                                        
                                    const response = await mockStep2(fieldValue);
                                    console.log(response)
                                    return (
                                        response.success ||
                                        response.errors.message
                                    )
                                }
                            }
                        })}
                    />
                    </label>
                    <ErrorField>{ errors?.age?.message }</ErrorField>
                </div>

                <div>
                    <label>
                    Years of experience:
                    <input
                        type="number"
                        {...register('yearsOfExp', {
                            required: 'Years of experience is required'
                        })}
                    />
                    </label>
                    <ErrorField>{ errors?.yearsOfExp?.message }</ErrorField>
                </div>

                <WizardPrev />
                <WizardNext />
            </form>
            <DevTool control={control} />
        </>
    )
}

export default Step2;