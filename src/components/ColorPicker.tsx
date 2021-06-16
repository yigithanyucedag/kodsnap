import { Popover, Transition } from "@headlessui/react";
import { ColorChangeHandler, SketchPicker } from "react-color";

interface ColorPickerProps {
  color: string;
  onChangeComplete: ColorChangeHandler | undefined;
}

const ColorPicker = ({ color, onChangeComplete }: ColorPickerProps) => {
  return (
    <Popover className="relative">
      <Popover.Button
        className="focus:outline-none w-6 h-6 rounded-sm"
        style={{ backgroundColor: color }}
      ></Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 right-0">
          <SketchPicker color={color} onChange={onChangeComplete} />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ColorPicker;
