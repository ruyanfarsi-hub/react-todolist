
type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function TextInput({
  value,
  onChange,
  placeholder = "Enter a task...",
}: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    />
  );
}
