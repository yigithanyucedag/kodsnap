import { Switch as DefaultSwitch } from "@headlessui/react";

interface SwitchProps {
  checked: boolean;
  onChange: any;
  label: string;
}

const Switch = ({ checked, onChange, label }: SwitchProps) => {
  return (
    <DefaultSwitch
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? "bg-blue-400" : "bg-gray-700"
      } focus:outline-none transition-colors ease-in-out duration-200 relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">{label}</span>
      <span
        className={`transition ease-in-out duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </DefaultSwitch>
  );
};

export default Switch;
