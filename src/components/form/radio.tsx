export function BasicRadio() {
    return (
        <div className="flex-none flex items-center">
            <input id="my-input1" value="card-1" name="xxx" type="radio" className="
                        peer/a
                        w-4 h-4 
                        appearance-none shrink-0
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
            <div className="pointer-events-none absolute w-2 h-2 rounded-full ml-1 peer-checked/a:bg-neutral-200 peer-checked/a:peer-disabled/a:bg-neutral-700" />
        </div>
    );
}

export function BasicRadioChecked() {
    return (
        <div className="flex-none flex items-center">
            <input checked id="my-input2" value="card-1" name="xxx2" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
            <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
        </div>
    );
}

export function BasicRadioDisabled() {
    return (
        <div className="flex-none flex items-center">
            <input disabled id="my-input3" value="card-1" name="xxx3" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
            <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
        </div>
    );
}

export function BasicRadioLabeled() {
    return (
        <div className="flex-none flex items-center space-x-1">
            <input id="my-input4" value="card-1" name="xxx4" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
            <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
            <label htmlFor="my-input4" className="text-md text-neutral-200">Labeled</label>
        </div>
    );
}

export function BasicRadioLabeledChecked() {
    return (
        <div className="flex-none flex items-center space-x-1">
            <input checked id="my-input5" value="card-1" name="xxx5" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
            <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
            <label htmlFor="my-input5" className="text-md text-neutral-200">Labeled</label>
        </div>
    );
}

export function BasicRadioLabeledDisabled() {
    return (
        <div className="flex-none flex items-center space-x-1">
            <input disabled id="my-input6" value="card-1" name="xxx6" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
            <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
            <label htmlFor="my-input6" className="text-md text-neutral-500">Labeled</label>
        </div>
    );
}