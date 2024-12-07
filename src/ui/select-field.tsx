interface SelectFieldProps {
  label: string;
  options: string[];
  onChange: (value: { question: string; answer: string }) => void;
}

export function SelectField({ label, options, onChange }: SelectFieldProps) {
  return (
    <div className="flex flex-col w-full justify py-4">
      <p className="text-white text-start">{label}</p>
      <select
        className="p-4 bg-white text-black"
        onChange={(e) => onChange({ question: label, answer: e.target.value })}
      >
        {options.map((option) => (
          <option className="text-black bg-blue" key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
