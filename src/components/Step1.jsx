import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useWizardContext } from "../contexts/WizardContext"
import ErrorField from "./ErrorField";
import { WizardNext } from '../App';
import { mockStep1 } from '../mocks/step1';

function Step1() {

    const { handleNext, handleSetState, state } = useWizardContext();

    const { register, control, handleSubmit, formState } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            firstName: state.firstName,
            lastName: state.lastName,
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
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            id="firstName"
                            {...register('firstName', {
                                required: 'First name is required',
                                validate: {
                                    uniqueFirstName: async (fieldValue) => {                                        
                                        const response = await mockStep1(fieldValue);
                                        return (
                                            response.success || 
                                            response.errors.message
                                        )
                                    }
                                }
                            })}
                        />
                    </label>
                    <ErrorField>{ errors?.firstName?.message }</ErrorField>
                </div>

                <div>
                    <label>
                        Last Name:
                        <input
                            id="lastName"
                            {...register('lastName', {
                                required: 'Last name is required'
                            })}
                        />
                    </label>
                    <ErrorField>{ errors?.lastName?.message }</ErrorField>
                </div>

                <WizardNext />
            </form>
            <DevTool control={control} />
        </>
    )
}

export default Step1;