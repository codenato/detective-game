interface ButtonProps {
  label: string;
}
export default function Button({ label }: ButtonProps) {
  return (
    <div className="bg-blue p-4 border-4 border-white hover:shadow-[inset_0_0_0_4px_rgba(255,255,255,1)]">
      <p className="text-white text-2xl ">{label}</p>
    </div>
  );
}
